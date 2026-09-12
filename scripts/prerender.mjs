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
  const { navigation, site } = await server.ssrLoadModule('/src/content/site.ts')
  const publicPaths = [...new Set(navigation.map(item => item.path))]
  for (const path of [...publicPaths, '/404']) {
    let markup = renderToString(createElement(StaticRouter, { location: path }, createElement(App)))
    const head = []
    markup = markup.replace(/<title>[\s\S]*?<\/title>|<meta\b[^>]*\/>|<link\b[^>]*\/>/g, tag => { head.push(tag); return '' })
    const document = template.replace('<!--app-head-->', head.join('\n    ')).replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    // Flat HTML files match Vercel cleanUrls without directory/slash redirects.
    const destination = resolve('dist', path === '/' ? 'index.html' : `${path.slice(1)}.html`)
    await mkdir(resolve(destination, '..'), { recursive: true })
    await writeFile(destination, document)
    console.log(`Prerendered ${path}`)
  }
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)
  const urls = publicPaths.map(path => `  <url><loc>${site.url}${path}</loc></url>`).join('\n')
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
} finally {
  await server.close()
}
