import { Page } from "@playwright/test";
export class RegistrationPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async login(username: string, password: string): Promise<void> {
    const usernameInput = this.page.locator('#username');
    const passwordInput = this.page.locator('#password');
    const loginButton = this.page.locator('#login');

    await usernameInput.type(username);
    await passwordInput.type(password);
    await loginButton.click();
  }

  public async selectLocation(location: string): Promise<void> {
    const locationDropdown = this.page.locator('#location');
    await locationDropdown.selectOption({ label: location });
  }

  // Add more methods for other elements and actions on the page
}
