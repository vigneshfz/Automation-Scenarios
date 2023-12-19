// login.spec.ts
import { chromium } from 'playwright';
import { LoginPage } from './LoginPage';

describe('Login', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should log in successfully', async () => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.example.com/login');
    await loginPage.login('username', 'password');
    await page.waitForNavigation();
    expect(page.url()).toBe('https://www.example.com/dashboard');
  });
});
