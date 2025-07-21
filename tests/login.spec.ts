import { test, expect } from '@playwright/test';

test('demo page title', async ({ page }) => {
  await page.goto('https://my-app-mhln.onrender.com');

  await expect(page).toHaveTitle(/Playwright/);
});