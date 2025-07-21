const { test, expect } = require('@playwright/test');

test('demo page title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});