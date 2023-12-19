import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Horizontal Slider' }).click();
  await page.getByRole('slider').fill('2.5');
  await page.getByRole('slider').click();
  await page.getByRole('slider').click();
  await page.getByRole('slider').click();
  await page.getByRole('slider').click();
    clickCount: 5
    await page.waitForTimeout(3000);
 
});