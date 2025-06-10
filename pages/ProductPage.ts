import { HelperMethods } from "../utils/helpers-methods";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  // Locators
  readonly catalogItems = this.page.locator(".product-item-link");
  readonly size = this.page.locator(".swatch-option.text");
  readonly addToCartButton = this.page.getByTitle("Add to Cart");
  readonly quantityInput = this.page.locator("#qty");
  readonly productName = this.page.locator(".page-title");
  readonly cart = this.page.locator(".action.showcart");
  readonly proceedToCheckoutButton = this.page.locator(
    "#top-cart-btn-checkout"
  );

  // Variables
  private helperMethods = new HelperMethods(this.page);

  // Methods
  async clickOnCatalogItem(productName: string) {
    const productLocator = this.page.locator(".product-item-info", {
      hasText: productName,
    });
    await productLocator.locator(`a:has-text("${productName}")`).click();
  }

  async clickOnAddToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async clickOnCart(): Promise<void> {
    await this.cart.click();
  }

  async clickOnProceedToCheckout(): Promise<void> {
    await this.helperMethods.waitForVisible(this.proceedToCheckoutButton);
    await this.proceedToCheckoutButton.click();
  }

  async selectSize(size: string): Promise<void> {
    const sizeLocator = this.size.getByText(`${size}`);
    await sizeLocator.click();
  }

  async selectColor(color: string): Promise<void> {
    const colorLocator = this.page.locator(
      '.swatch-option.color[aria-label="' + color + '"]'
    );
    await colorLocator.click();
  }

  async setQuantity(quantity: string): Promise<void> {
    await this.quantityInput.fill(quantity);
  }

  async getProductName(): Promise<string> {
    const productName = (await this.productName.textContent()) || "";
    return productName.trim();
  }

  async isSuccessMessageVisible(): Promise<boolean> {
    const successMessage = this.page.locator(
      ".message-success.success.message"
    );
    await this.helperMethods.waitForVisible(successMessage);
    return await successMessage.isVisible();
  }

  async areItemsInCart(): Promise<boolean> {
    const cartItems = this.page.locator(".cart-item");
    await this.helperMethods.waitForVisible(cartItems);
    return (await cartItems.count()) > 0;
  }
}
