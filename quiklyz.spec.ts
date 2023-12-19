import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sit.quiklyz.com/login');
  await page.locator('.col-md-12 > div > div > div > fg-input > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').first().click();
  await page.getByPlaceholder('Enter your First Name').fill('Agasthya');
  await page.locator('div:nth-child(2) > div > fg-input > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').first().click();
  await page.getByPlaceholder('Enter your Last Name').click();
  await page.getByPlaceholder('Enter your Last Name').fill('U');
  await page.getByRole('tabpanel', { name: 'Register' }).getByText('Email Address').click();
  await page.getByPlaceholder('Enter your Email Address').fill('agasthya.k@gmail.com');
  await page.getByRole('tabpanel', { name: 'Register' }).getByText('You will receive an OTP on this number for verification I have read and accept t').click();
  await page.getByRole('tabpanel', { name: 'Register' }).getByText('You will receive an OTP on this number for verification I have read and accept t').click();
  await page.getByRole('textbox', { name: 'Enter your Mobile Number' }).click();
  await page.getByPlaceholder('Enter your Mobile Number').fill('9997144400');
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.getByRole('tabpanel', { name: 'Register' }).getByRole('button', { name: 'Edit Record' }).click();
  await page.locator('.form-control').first().click();
  await page.locator('.form-control').first().fill('1');
  await page.locator('div:nth-child(2) > .form-control').first().fill('2');
  await page.locator('div:nth-child(3) > .form-control').first().fill('3');
  await page.locator('div:nth-child(4) > .form-control').first().fill('4');
  await page.locator('div:nth-child(5) > .form-control').first().fill('5');
  await page.locator('div:nth-child(6) > .form-control').first().fill('6');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.goto('https://sit.quiklyz.com/');
}); 