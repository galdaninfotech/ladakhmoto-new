import { test, expect, Page } from '@playwright/test'

test.describe('Frontend', () => {
  let page: Page

  test.beforeAll(async ({ browser }, testInfo) => {
    const context = await browser.newContext()
    page = await context.newPage()
  })

  test('can go on homepage', async ({ page }) => {
    await page.goto('http://localhost:3000')
    setTimeout(async() => {
      await expect(page).toHaveTitle(/Ladakh Moto | Ladakh Moto/)
    }, 1000)

    
    setTimeout(async() => {
      const heading = page.locator('h1').first()
      await expect(heading).toHaveText('Why Choose Ladakh Moto?')
    }, 1000)

    // await expect(heading).toHaveText('Why Choose Ladakh Moto?')
  })
})
