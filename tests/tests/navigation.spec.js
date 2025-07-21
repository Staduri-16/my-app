const { test, expect } = require('@playwright/test');

test('navigate to Contact page and submit form', async ({ page }) => {
  await page.goto('https://my-app-mhln.onrender.com');

  // Click the button to go to contact
  await page.click('text=Go to Contact Page');

  // Fill the form
  await page.fill('input[placeholder="Your name"]', 'Siri');
  await page.fill('input[placeholder="Your email"]', 'siri@example.com');

  // Submit the form
  await page.click('text=Submit');

  // Check if we’re still on contact page
  await expect(page.locator('h1')).toHaveText('📞 Contact Page');
});
