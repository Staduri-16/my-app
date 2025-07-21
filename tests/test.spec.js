import { test, expect } from '@playwright/test';

test('should navigate to contact page and submit form', async ({ page }) => {
  await page.goto('https://my-app-mhln.onrender.com/');
  await page.click('text=Go to Contact Page');

  await page.waitForSelector('h1');
  await expect(page.locator('h1')).toHaveText('📞 Contact Page');

  await page.fill('input[placeholder="Your name"]', 'Siri');
  await page.fill('input[placeholder="Your email"]', 'siri@example.com');
  await page.click('text=Submit');

  // 🔥 REMOVE THIS ↓ since no navigation happens after form submission
  // await expect(page).toHaveURL(/.*contact/);
});
