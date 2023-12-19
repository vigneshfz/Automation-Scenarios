import { test, expect } from '@playwright/test';


test('Assert Value Equality in Playwright TypeScript', async ({ page }) => {
    const Value =  page.getByText('List item 3');
    //const pageTitle = await page.title();

    await page.goto('https://practice.expandtesting.com/');
    await page.getByRole('link', { name: 'Should Have' }).click();
  // Assume you have a value that you want to test
 

//   // Assert that the value is equal to a reference value
//   expect(actualValue).toEqual(2023);

//   //  toBe for strict equality
//   expect(actualValue).toBe(2023);


//   // If you want to test for inequality, you can use toEqual with a different value
//   expect(actualValue).not.toEqual(3000);

await page.getByText('List item 3');
const value =  page.getByText('List item 3');
await expect(value).toHaveValue("3");

});
// const newsletterYesRadio = page.locator("#input-newsletter-yes");
// await expect(newsletterYesRadio).toHaveValue("1");