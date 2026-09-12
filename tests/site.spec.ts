import { test, expect } from '@playwright/test'

const routes = [
  ['/', 'Huset Stjernestøv'],
  ['/om-os', 'Om Huset Stjernestøv'],
  ['/malgruppe', 'Målgruppe'],
  ['/faglig-tilgang', 'Faglig tilgang'],
  ['/hverdagen', 'Hverdagen hos os'],
  ['/for-kommuner', 'For kommuner og visitation'],
  ['/kontakt', 'Skal vi tale om et muligt match?'],
]

for (const width of [360, 768, 1440]) {
  test(`All routes, metadata and supplied images at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 })
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    for (const [route, heading] of routes) {
      await page.goto(route)
      await expect(page.locator('h1')).toHaveCount(1)
      await expect(page.locator('h1')).toHaveText(heading)
      await expect(page.locator('html')).toHaveAttribute('lang', 'da')
      await expect(page.locator('head title')).toHaveCount(1)
      await expect(page.locator('head meta[name="description"]')).toHaveCount(1)
      await expect(page.locator('head meta[property="og:title"]')).toHaveCount(1)
      await expect(page.locator('head link[rel="canonical"]')).toHaveCount(1)
      await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute('href', `https://husetstjernestov.dk${route}`)
      await expect(page.locator('head meta[property="og:url"]')).toHaveAttribute('content', `https://husetstjernestov.dk${route}`)
      await expect(page.locator('head meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image')
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
      for (const img of await page.locator('img').all()) {
        await img.scrollIntoViewIfNeeded()
        await expect(img).toHaveAttribute('alt', /.+/)
        await expect.poll(() => img.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true)
      }
      expect(await page.locator('body').innerText()).not.toMatch(/botilbud|afdelinger|Unsplash/)
    }
    expect(errors).toEqual([])
  })
}

test('Mobile navigation supports keyboard, Escape, route changes and back', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Menu' })
  await expect(page.getByRole('navigation', { name: 'Hovednavigation' })).toBeHidden()
  await toggle.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('button', { name: 'Luk' })).toHaveAttribute('aria-expanded', 'true')
  await page.keyboard.press('Escape')
  await expect(toggle).toBeFocused()
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await toggle.click()
  await page.getByRole('navigation', { name: 'Hovednavigation' }).getByRole('link', { name: 'Om os', exact: true }).click()
  await expect(page).toHaveURL('/om-os')
  await expect(page.locator('main')).toBeFocused()
  await expect(page.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false')
  await expect(page).toHaveTitle('Om os | Huset Stjernestøv')
  await page.goBack()
  await expect(page).toHaveURL('/')
  await expect(page).toHaveTitle('Huset Stjernestøv | Opholdssted for børn og unge')
})

test('Contact shows both contact persons and their real details', async ({ page }) => {
  await page.goto('/kontakt')
  await expect(page.getByRole('link', { name: 'Ring til os' })).toHaveAttribute('href', 'tel:+4560223347')
  await expect(page.getByRole('link', { name: 'yg@husetstjernestov.dk' })).toHaveAttribute('href', 'mailto:yg@husetstjernestov.dk')
  await expect(page.getByRole('link', { name: 'kb@husetstjernestov.dk' })).toHaveAttribute('href', 'mailto:kb@husetstjernestov.dk')
  await expect(page.getByRole('link', { name: '+45 93 98 27 70' })).toHaveAttribute('href', 'tel:+4593982770')
  await expect(page.locator('iframe')).toHaveAttribute('src', /L%C3%A5sbyvej\+61/)
})

test('Static HTML contains route-specific content without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  for (const [route, heading] of routes) {
    const response = await page.goto(`http://127.0.0.1:4173${route}`)
    expect(response?.status()).toBe(200)
    await expect(page.locator('h1')).toHaveText(heading)
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/)
    await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute('href', `https://husetstjernestov.dk${route}`)
    await expect(page.locator('head meta[property="og:image"]')).toHaveAttribute('content', 'https://husetstjernestov.dk/images/logo.png')
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1)
  }
  await context.close()
})

test('Old and unknown routes show the Danish not-found page', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => { history.pushState({}, '', '/afdelinger'); dispatchEvent(new PopStateEvent('popstate')) })
  await expect(page.locator('h1')).toHaveText('Siden blev ikke fundet')
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow')
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0)
  await page.getByRole('link', { name: 'Tilbage til forsiden' }).click()
  await expect(page).toHaveURL('/')
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index, follow')
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(1)
})

test('Metadata stays unique and matches each page during client navigation', async ({ page }) => {
  await page.goto('/kontakt')
  const titles = new Set<string>()
  const descriptions = new Set<string>()
  for (const [route, heading] of routes) {
    await page.getByRole('navigation', { name: 'Navigation i sidefod' }).locator(`a[href="${route}"]`).click()
    await expect(page.locator('h1')).toHaveText(heading)
    await expect(page.locator('head title')).toHaveCount(1)
    await expect(page.locator('head link[rel="canonical"]')).toHaveCount(1)
    await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute('href', `https://husetstjernestov.dk${route}`)
    await expect(page.locator('meta[name="description"]')).toHaveCount(1)
    const title = await page.title()
    const description = await page.locator('meta[name="description"]').getAttribute('content')
    expect(titles.has(title)).toBe(false)
    expect(descriptions.has(description!)).toBe(false)
    titles.add(title)
    descriptions.add(description!)
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      await expect(page.locator(selector)).toHaveCount(1)
      await expect(page.locator(selector)).toHaveAttribute('content', title)
    }
    for (const selector of ['meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      await expect(page.locator(selector)).toHaveCount(1)
      await expect(page.locator(selector)).toHaveAttribute('content', description!)
    }
    await expect(page.locator('meta[name="robots"]')).toHaveCount(1)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index, follow')
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1)
  }
})

test('Crawl files contain only canonical pages and public brand assets load', async ({ request }) => {
  const robots = await request.get('/robots.txt')
  expect(robots.status()).toBe(200)
  expect(await robots.text()).toBe('User-agent: *\nAllow: /\n\nSitemap: https://husetstjernestov.dk/sitemap.xml\n')
  const sitemap = await request.get('/sitemap.xml')
  expect(sitemap.status()).toBe(200)
  const xml = await sitemap.text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]).sort()
  expect(urls).toEqual(routes.map(([route]) => `https://husetstjernestov.dk${route}`).sort())
  for (const path of ['/favicon.svg', '/images/logo.png']) {
    const asset = await request.get(path)
    expect(asset.status()).toBe(200)
    expect(asset.headers()['content-type']).toMatch(/^image\//)
  }
})
