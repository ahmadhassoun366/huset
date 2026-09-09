import assert from 'node:assert/strict'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const routes = {
    '/': 'Alle har ret til en ny fortælling',
    '/om-os': 'Om Huset Stjernestøv',
    '/malgruppe': 'Målgruppe',
    '/faglig-tilgang': 'Faglig tilgang',
    '/hverdagen': 'Hverdagen hos os',
    '/for-kommuner': 'For kommuner og visitation',
    '/kontakt': 'Skal vi tale om et muligt match?',
  }
  for (const [path, heading] of Object.entries(routes)) {
    const html = renderToStaticMarkup(createElement(StaticRouter, { location: path }, createElement(App)))
    assert.ok(html.includes(heading), `${path}: missing approved heading`)
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: exactly one h1`)
    assert.ok(html.includes('name="description"'), `${path}: missing description`)
    assert.ok(html.includes('property="og:title"'), `${path}: missing Open Graph title`)
    assert.ok(html.includes('tel:+4560223347'), `${path}: missing phone link`)
    assert.ok(!/unsplash|botilbud|Flere steder i Jylland/.test(html), `${path}: old site content remains`)
    if (path === '/om-os') for (const file of ['member1.jpg', 'member2.jpg', 'member3.png', 'member4.JPG', 'member5.PNG']) assert.ok(html.includes(file), `missing ${file}`)
    console.log(`PASS ${path}`)
  }
} finally {
  await server.close()
}
