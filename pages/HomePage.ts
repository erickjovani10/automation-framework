import { HelperMethods } from "../utils/helpers-methods";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  // Locators
  readonly searchInput = this.page.locator("#search");

  // Variables
  private helperMethods = new HelperMethods(this.page);

  // Methods
  async enterSearchQuery(text: string): Promise<void> {
    await this.helperMethods.waitForVisible(this.searchInput);
    await this.searchInput.fill(text);
    await this.page.keyboard.press("Enter");
  }
}
