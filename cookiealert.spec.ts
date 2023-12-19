import { test, expect } from '@playwright/test';

test('Data tables', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Cookie Consent Alert' }).click();
  await page.getByRole('button', { name: 'I Accept'}).click();

 });