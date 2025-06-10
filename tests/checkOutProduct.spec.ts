import { expect, test } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { HomePage } from "../pages/HomePage";
import { HelperMethods } from "../utils/helpers-methods";
import { CheckoutPage } from "../pages/CheckoutPage";
import {
  checkoutFormData,
  productDetails,
  ShippingMethods,
} from "../data/testData";

test.describe("E2E: Add product to cart and complete checkout", () => {
  let homePage: HomePage;
  let catalogPage: ProductPage;
  let helperMethods: HelperMethods;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    catalogPage = new ProductPage(page);
    helperMethods = new HelperMethods(page);
    checkoutPage = new CheckoutPage(page);
  });

  test("should add a product to the cart and checkout successfully", async () => {
    await homePage.goto("https://magento.softwaretestingboard.com/");
    expect.soft(await homePage.page.title()).toBe("Home Page");
    await homePage.enterSearchQuery(productDetails.searchQuery);
    await catalogPage.clickOnCatalogItem(productDetails.name);
    expect
      .soft(await catalogPage.getProductName())
      .toBe(productDetails.name);
    await catalogPage.selectSize(productDetails.size);
    await catalogPage.selectColor(productDetails.color);
    await catalogPage.setQuantity(productDetails.quantity);
    await catalogPage.clickOnAddToCart();
    expect.soft(await catalogPage.isSuccessMessageVisible()).toBe(true);
    await catalogPage.clickOnCart();
    await catalogPage.clickOnProceedToCheckout();
    expect.soft(await checkoutPage.isShippingFormVisible()).toBe(true);
    await checkoutPage.enterEmail(checkoutFormData.email);
    await checkoutPage.enterFirstName(checkoutFormData.firstName);
    await checkoutPage.enterLastName(checkoutFormData.lastName);
    await checkoutPage.enterCompany(checkoutFormData.company);
    await checkoutPage.enterStreetAddress(checkoutFormData.streetAddress);
    await checkoutPage.enterCity(checkoutFormData.city);
    await checkoutPage.selectState(checkoutFormData.state);
    await checkoutPage.enterZipCode(checkoutFormData.zipCode);
    await checkoutPage.selectCountry(checkoutFormData.country);
    await checkoutPage.enterPhone(checkoutFormData.phone);
    await checkoutPage.selectShippingMethod(ShippingMethods.FlatRate);
    await checkoutPage.clickNextButton();
    expect.soft(await checkoutPage.isCheckoutPaymentMethodVisible()).toBe(true);
    await checkoutPage.clickOnExpandedSection();
    expect
      .soft(
        await checkoutPage.isProductItemNameVisible(
          productDetails.name
        )
      )
      .toBe(true);
    await checkoutPage.clickPlaceOrderButton();
    const response = await helperMethods.waitForOrderSuccessRequest();
    expect(response.status()).toBe(200);
    expect(response.url()).toContain("/checkout/onepage/success/");
    expect.soft(await checkoutPage.isPurchaseSuccessful()).toBe(true);
    expect(await checkoutPage.isOrderSuccessMessageVisible()).toBe(true);
  });
});
