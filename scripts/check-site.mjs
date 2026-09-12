import assert from 'node:assert/strict'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const routes = {
    '/': 'Huset Stjernestøv',
    '/om-os': 'Om Huset Stjernestøv',
    '/malgruppe': 'Målgruppe',
    '/faglig-tilgang': 'Faglig tilgang',
    '/hverdagen': 'Hverdagen hos os',
    '/for-kommuner': 'For kommuner og visitation',
    '/kontakt': 'Skal vi tale om et muligt match?',
  }
  const titles = new Set()
  const descriptions = new Set()
  for (const [path, heading] of Object.entries(routes)) {
    const html = renderToStaticMarkup(createElement(StaticRouter, { location: path }, createElement(App)))
    const plainText = html.replace(/<[^>]*>/g, '')
    assert.ok(plainText.includes(heading), `${path}: missing approved heading`)
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: exactly one h1`)
    assert.ok(html.includes('name="description"'), `${path}: missing description`)
    assert.ok(html.includes('property="og:title"'), `${path}: missing Open Graph title`)
    const canonical = `https://husetstjernestov.dk${path}`
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${path}: missing production canonical`)
    assert.ok(html.includes(`property="og:url" content="${canonical}"`), `${path}: wrong social URL`)
    assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), `${path}: missing Twitter card`)
    assert.ok(html.includes('property="og:image" content="https://husetstjernestov.dk/images/logo.png"'), `${path}: wrong preview image`)
    const title = html.match(/<title>(.*?)<\/title>/)?.[1]
    const description = html.match(/name="description" content="([^"]+)"/)?.[1]
    assert.ok(title && !titles.has(title), `${path}: missing or duplicate title`)
    assert.ok(description && !descriptions.has(description), `${path}: missing or duplicate description`)
    titles.add(title)
    descriptions.add(description)
    if (path === '/') {
      assert.equal(title, 'Huset Stjernestøv | Opholdssted for børn og unge')
      assert.match(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '', /Huset Stjernestøv/)
      const data = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? 'null')
      assert.ok(data, 'Missing structured data')
      const organization = data['@graph'].find(item => item['@type'] === 'Organization')
      const website = data['@graph'].find(item => item['@type'] === 'WebSite')
      assert.equal(organization.name, 'Huset Stjernestøv')
      assert.equal(organization.url, 'https://husetstjernestov.dk')
      assert.equal(organization.telephone, '+45 60 22 33 47')
      assert.equal(organization.address.postalCode, '8660')
      assert.equal(website.name, organization.name)
      assert.equal(website.url, organization.url)
    }
    assert.ok(html.includes('tel:+4560223347'), `${path}: missing phone link`)
    assert.ok(!/unsplash|botilbud|Flere steder i Jylland/.test(html), `${path}: old site content remains`)
    if (path === '/om-os') for (const file of ['member1.jpg', 'member2.jpg', 'member3.png', 'member4.JPG', 'member5.PNG']) assert.ok(html.includes(file), `missing ${file}`)
    console.log(`PASS ${path}`)
  }
} finally {
  await server.close()
}
