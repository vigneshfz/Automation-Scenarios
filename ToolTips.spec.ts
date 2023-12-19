import { test, expect } from '@playwright/test';

test('Data tables', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Tooltips' }).click();
  await page.getByRole('button', { name: 'Tooltip on top'}).click();
  await page.getByRole('button', { name: 'Tooltip on end'}).click();
  await page.getByRole('button', { name: 'Tooltip on bottom'}).click();
  await page.getByRole('button', { name: 'Tooltip on start'}).click();
  await page.getByRole('button', { name: 'Tooltip with HTML'}).click();
 });