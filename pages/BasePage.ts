import { Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates the page to the specified URL.
   * @param url - The URL to navigate to.
   * @returns A promise that resolves when the navigation is complete.
   */
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
