import { test, expect } from '@playwright/test';

test('navigate to Contact page and submit form', async ({ page }) => {
  await page.goto('https://my-app-mhln.onrender.com/');
  await page.click('text=Go to Contact Page');

  await page.waitForSelector('h1');
  await page.screenshot({ path: 'contact-page.png', fullPage: true });

  await expect(page.locator('h1')).toHaveText('📞 Contact Page');

  await page.fill('input[placeholder="Your name"]', 'Test User');
  await page.fill('input[placeholder="Your email"]', 'test@example.com');
  await page.click('text=Submit');
});
