import { test, expect } from '@playwright/test';

test('navigate to Contact page and submit form', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Go to Contact Page');

  // Wait and capture screenshot to debug CI issues
  await page.waitForSelector('h1');
  await page.screenshot({ path: 'contact-page.png', fullPage: true });

  // Fix: Expect exact heading (with emoji)
  await expect(page.locator('h1')).toHaveText('📞 Contact Page');

  await page.fill('input[placeholder="Your name"]', 'Test User');
  await page.fill('input[placeholder="Your email"]', 'test@example.com');
  await page.click('text=Submit');
});
