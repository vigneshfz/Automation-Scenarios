import { test, expect } from '@playwright/test';

test('Data tables', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Sortable Data Tables' }).click();
   
});

