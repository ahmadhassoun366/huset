import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

const domain = 'https://www.husetstjernestov.dk'
const routePaths = ['/', '/om-os', '/malgruppe', '/faglig-tilgang', '/hverdagen', '/for-kommuner', '/kontakt']

const robots = await readFile('public/robots.txt', 'utf8')
for (const crawler of ['Googlebot', 'Bingbot', 'Applebot', '*']) {
  assert.match(robots, new RegExp(`User-agent: ${crawler === '*' ? '\\*' : crawler}\\s+Allow: /`, 'i'), `robots.txt: ${crawler} must be allowed`)
}
assert.ok(!/^\s*Disallow:/im.test(robots), 'robots.txt: public routes must not be disallowed')
assert.match(robots, /Sitemap: https:\/\/www\.husetstjernestov\.dk\/sitemap\.xml/i, 'robots.txt: missing absolute sitemap URL')
console.log('PASS robots.txt')

const sitemap = await readFile('public/sitemap.xml', 'utf8')
const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
assert.deepEqual(sitemapLocations, routePaths.map(path => `${domain}${path}`), 'sitemap.xml: routes must exactly match the application router')
assert.equal((sitemap.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g) || []).length, routePaths.length, 'sitemap.xml: every URL needs a lastmod date')
assert.equal((sitemap.match(/<changefreq>(?:always|hourly|daily|weekly|monthly|yearly|never)<\/changefreq>/g) || []).length, routePaths.length, 'sitemap.xml: every URL needs a valid changefreq')
assert.equal((sitemap.match(/<priority>(?:0(?:\.\d)?|1(?:\.0)?)<\/priority>/g) || []).length, routePaths.length, 'sitemap.xml: every URL needs a valid priority')
console.log('PASS sitemap.xml')

const template = await readFile('index.html', 'utf8')
assert.match(template, /<html lang="da">/, 'index.html: document language must be Danish')
for (const requiredHeadTag of [
  /<title>[^<]+<\/title>/,
  /<meta name="description" content="[^"]+"\s*\/?>/,
  /<meta property="og:title" content="[^"]+"\s*\/?>/,
  /<meta property="og:description" content="[^"]+"\s*\/?>/,
  /<meta property="og:image" content="https:\/\/www\.husetstjernestov\.dk\/[^"]+"\s*\/?>/,
  /<meta property="og:url" content="https:\/\/www\.husetstjernestov\.dk\/"\s*\/?>/,
]) assert.match(template, requiredHeadTag, `index.html: missing required metadata ${requiredHeadTag}`)

const jsonLdMatch = template.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
assert.ok(jsonLdMatch, 'index.html: missing JSON-LD block')
const organization = JSON.parse(jsonLdMatch[1])
assert.equal(organization['@context'], 'https://schema.org')
assert.equal(organization['@type'], 'Organization')
assert.equal(organization.name, 'Huset Stjernestøv')
assert.equal(organization.url, `${domain}/`)
assert.equal(organization.logo, `${domain}/images/logo.png`)
assert.deepEqual(organization.address, {
  '@type': 'PostalAddress',
  streetAddress: 'Låsbyvej 61',
  addressLocality: 'Forlev',
  addressRegion: 'Midtjylland',
  postalCode: '8660',
  addressCountry: 'DK',
})
assert.ok(organization.description, 'index.html: Organization needs a description')
console.log('PASS index.html SEO metadata and JSON-LD')

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
    const plainText = html.replace(/<[^>]*>/g, '')
    assert.ok(plainText.includes(heading), `${path}: missing approved heading`)
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
