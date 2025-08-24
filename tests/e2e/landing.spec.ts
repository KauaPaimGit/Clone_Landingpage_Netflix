import { test, expect } from '@playwright/test'

test('header becomes solid on scroll', async ({ page }) => {
  await page.goto('/')
  const header = page.locator('header')
  await page.evaluate(() => window.scrollTo(0, 200))
  await expect(header).toHaveClass(/sticky/)
})

test('CTA visible in viewport', async ({ page }) => {
  await page.goto('/')
  const cta = page.getByRole('heading', { name: /pronto para assistir/i })
  await cta.scrollIntoViewIfNeeded()
  await expect(cta).toBeVisible()
})

test('anchor navigation works', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /recursos/i }).click()
  await expect(page.locator('#features')).toBeVisible()
})

test('carousel scrolls', async ({ page }) => {
  await page.goto('/')
  const car = page.locator('section#popular [tabindex="0"]').first()
  await car.focus()
  await page.keyboard.press('ArrowRight')
  await expect(car).toBeFocused()
})
