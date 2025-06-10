import { HelperMethods } from "../utils/helpers-methods";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  // Locators
  readonly shippingForm = this.page.locator("#shipping");
  readonly emailInput = this.page.locator(
    '//fieldset//*[@id = "customer-email"]'
  );
  readonly firstNameInput = this.page.locator('[name="firstname"]');
  readonly lastNameInput = this.page.locator('[name="lastname"]');
  readonly companyInput = this.page.locator('[name="company"]');
  readonly streetAddressInput = this.page.locator('[name="street[0]"]');
  readonly cityInput = this.page.locator('[name="city"]');
  readonly stateSelect = this.page.locator('[name="region_id"]');
  readonly zipCodeInput = this.page.locator('[name="postcode"]');
  readonly countrySelect = this.page.locator('[name="country_id"]');
  readonly phoneInput = this.page.locator('[name="telephone"]');
  readonly nextButton = this.page.locator('button:has-text("Next")');
  readonly checkoutPaymentMethod = this.page.locator(
    "#checkout-payment-method-load"
  );
  readonly placeOrderButton = this.page.locator(
    'button:has-text("Place Order")'
  );
  readonly expandedSection = this.page.locator(
    ".items-in-cart > div:first-child"
  );
  readonly productItemName = this.page.locator(".product-item-name");
  readonly successMessagePurchase = this.page.locator(
    'span:has-text("Thank you for your purchase!")'
  );
  readonly orderSuccessMessage = this.page.locator(
    'p:has-text("Your order #")'
  );

  // Variables
  private helperMethods = new HelperMethods(this.page);

  // Methods
  async enterEmail(email: string): Promise<void> {
    await this.helperMethods.waitForVisible(this.emailInput);
    await this.emailInput.fill(email);
  }

  async enterFirstName(firstName: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
  }

  async enterLastName(lastName: string): Promise<void> {
    await this.lastNameInput.fill(lastName);
  }

  async enterCompany(company: string): Promise<void> {
    await this.companyInput.fill(company);
  }

  async enterStreetAddress(address: string): Promise<void> {
    await this.streetAddressInput.fill(address);
  }

  async enterCity(city: string): Promise<void> {
    await this.cityInput.fill(city);
  }

  async selectState(state: string): Promise<void> {
    await this.stateSelect.selectOption(state);
  }

  async enterZipCode(zipCode: string): Promise<void> {
    await this.zipCodeInput.fill(zipCode);
  }

  async selectCountry(country: string): Promise<void> {
    await this.countrySelect.selectOption(country);
  }

  async enterPhone(phone: string): Promise<void> {
    await this.phoneInput.fill(phone);
  }

  async selectShippingMethod(value: string): Promise<void> {
    const shippingOption = this.page.locator(`[value="${value}"]`);
    await shippingOption.click();
  }

  async clickNextButton(): Promise<void> {
    await this.nextButton.click();
  }

  async clickPlaceOrderButton(): Promise<void> {
    await this.placeOrderButton.click();
  }

  async clickOnExpandedSection(): Promise<void> {
    await this.expandedSection.click();
  }

  async isProductItemNameVisible(expectedName: string): Promise<boolean> {
    await this.helperMethods.waitForVisible(this.productItemName);
    const actualName = await this.productItemName.textContent();
    return actualName?.trim() === expectedName;
  }

  async isShippingFormVisible(): Promise<boolean> {
    await this.helperMethods.waitForVisible(this.shippingForm);
    return await this.shippingForm.isVisible();
  }

  async isCheckoutPaymentMethodVisible(): Promise<boolean> {
    await this.helperMethods.waitForVisible(this.checkoutPaymentMethod);
    return await this.checkoutPaymentMethod.isVisible();
  }

  async isPurchaseSuccessful(): Promise<boolean> {
    await this.helperMethods.waitForVisible(this.successMessagePurchase);
    return await this.successMessagePurchase.isVisible();
  }

  async isOrderSuccessMessageVisible(): Promise<boolean> {
    await this.helperMethods.waitForVisible(this.orderSuccessMessage);
    return await this.orderSuccessMessage.isVisible();
  }
}
