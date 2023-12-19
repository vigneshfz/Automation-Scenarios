// my-test.ts
import { test as base } from '@playwright/test';

export type TestOptions = {
  person: string;
};

export const test = base.extend<TestOptions>({
  // Define an option and provide a default value.
  // We can later override it in the config.
  person: ['John', { option: true }],

  // Override default "page" fixture.
  page: async ({ page, person }, use) => {
    await page.goto('/chat');
    // We use "person" parameter as a "name" for the chat room.
    await page.getByLabel('User Name').fill(person);
    await page.getByText('Enter chat room').click();
    // Each test will get a "page" that already has the person name.
    await use(page);
  },
});