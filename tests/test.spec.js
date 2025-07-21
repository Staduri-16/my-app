import { test, expect } from '@playwright/test';

test('should navigate to contact page and submit form', async ({ page }) => {
  // Go to home page
  await page.goto('https://my-app-mhln.onrender.com');

  // Click the button to go to Contact Page
  await page.click('text=Go to Contact Page');

  // Fill in the form
  await page.fill('input[placeholder="Your name"]', 'Siri');
  await page.fill('input[placeholder="Your email"]', 'siri@example.com');

  // Submit the form
  await page.click('text=Submit');

  // Assertion (placeholder - your form doesn’t redirect or show a message)
  await expect(page).toHaveURL(/.*contact/);
});
