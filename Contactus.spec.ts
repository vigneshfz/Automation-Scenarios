import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('vignesh k');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('vigneshmks2409@gmail.com');
  await page.locator('textarea[name="address"]').click();
  await page.locator('textarea[name="address"]').fill('test');
  await page.getByRole('link', { name: 'Send' }).click();
});