import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createServer } from 'vite'

// Generate real HTML and page metadata for visitors and link-preview crawlers.
const template = await readFile('dist/index.html', 'utf8')
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const { navigation } = await server.ssrLoadModule('/src/content/site.ts')
  for (const path of ['/', ...navigation.map(item => item.path), '/404']) {
    let markup = renderToString(createElement(StaticRouter, { location: path }, createElement(App)))
    const head = []
    markup = markup.replace(/<title>[\s\S]*?<\/title>|<meta\b[^>]*\/>|<link\b[^>]*\/>/g, tag => { head.push(tag); return '' })
    const document = template.replace('<!--app-head-->', head.join('\n    ')).replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    const destination = path === '/404' ? resolve('dist/404.html') : resolve('dist', `.${path}`, 'index.html')
    await mkdir(resolve(destination, '..'), { recursive: true })
    await writeFile(destination, document)
    console.log(`Prerendered ${path}`)
  }
} finally {
  await server.close()
}
