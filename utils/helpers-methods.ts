import { BasePage } from "../pages/BasePage";
import { Locator, Response } from "@playwright/test";

export class HelperMethods extends BasePage {
  /**
   * Waits for the specified locator to become visible within a given timeout.
   * @param locator - The Playwright Locator to wait for.
   * @param timeout - The maximum time to wait for the locator to become visible, in milliseconds. Defaults to 10,000 ms.
   * @returns A promise that resolves when the locator becomes visible or rejects if the timeout is exceeded.
   * @example
   * await helperMethos.waitForVisible(locator, 5000);
   */
  async waitForVisible(
    locator: Locator,
    timeout: number = 10000
  ): Promise<void> {
    await locator.waitFor({ state: "visible", timeout });
  }

  /**
   * Waits for a successful order request by monitoring network responses.
   * This method listens for a specific HTTP GET request to the "/checkout/onepage/success/" endpoint
   * with a status code of 200. It resolves when such a response is detected.
   * @returns {Promise<Response>} A promise that resolves to the intercepted response object.
   * @example
   * expect(response.status()).toBe(200);
   * expect(response.url()).toContain("/checkout/onepage/success/");
   */
  async waitForOrderSuccessRequest(): Promise<Response> {
    const response = await this.page.waitForResponse(
      (resp) =>
        resp.url().includes("/checkout/onepage/success/") &&
        resp.request().method() === "GET" &&
        resp.status() === 200
    );
    return response;
  }
}
