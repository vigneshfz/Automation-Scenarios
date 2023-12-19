import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'OTP: One Time Password' }).click();

  await page.locator ('[id="email"]').fill('practice@expandtesting.com')
  await page.getByRole('button', { name: 'Send OTP Code'}).click();
  await page.locator('[id="otp"]').fill('214365')
  await page.getByRole('button', { name: 'Verify OTP Code'}).click();
});
