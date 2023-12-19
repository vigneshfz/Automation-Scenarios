import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'IFrame' }).click();
  await page.locator('[class="ytp-large-play-button ytp-button ytp-large-play-button-red-bg"]').click();
   
});