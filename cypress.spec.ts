import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Cypress spies, stubs and clocks' }).click();

  await page.getByRole('button', { name: 'Find My Location'}).click();


  await page.getByRole('button', { name: 'Discover This Method'}).click();
});
