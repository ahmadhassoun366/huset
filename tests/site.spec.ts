import { test, expect } from '@playwright/test'

const routes = [
  ['/', 'Alle har ret til en ny fortælling'],
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
  await expect(page).toHaveTitle('Alle har ret til en ny fortælling | Huset Stjernestøv')
})

test('Contact calls the real number and keeps unconfirmed email unlinked', async ({ page }) => {
  await page.goto('/kontakt')
  await expect(page.getByRole('link', { name: 'Ring til os' })).toHaveAttribute('href', 'tel:+4560223347')
  await expect(page.getByText('E-mail afventer')).toBeVisible()
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0)
  await expect(page.locator('iframe')).toHaveAttribute('src', /L%C3%A5sbyvej\+61/)
})

test('Static HTML contains route-specific content without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  for (const [route, heading] of routes) {
    await page.goto(`http://127.0.0.1:4173${route}`)
    await expect(page.locator('h1')).toHaveText(heading)
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/)
  }
  await context.close()
})

test('Old and unknown routes show the Danish not-found page', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => { history.pushState({}, '', '/afdelinger'); dispatchEvent(new PopStateEvent('popstate')) })
  await expect(page.locator('h1')).toHaveText('Siden blev ikke fundet')
  await page.getByRole('link', { name: 'Tilbage til forsiden' }).click()
  await expect(page).toHaveURL('/')
})
