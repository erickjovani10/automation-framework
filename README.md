# Playwright E2E Test

This project is a basic end-to-end (E2E) testing framework using [Playwright] with TypeScript. It supports testing across multiple browsers (Chromium, Firefox, and WebKit) and integrates with [Allure] for advanced test reporting.

### Prerequisites

- Node.js (v20 or later)
- npm (v9 or later)

### Installation

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install --with-deps
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

You can also specify a particular test file or project:

```bash
npx playwright test tests/example.spec.ts --project=Chrome
```

## Project Structure

```
├── .github/workflows/             # GitHub Actions CI pipeline
│   └── playwright.yaml
├── data/                          # Test data files
│   └── testData.ts
├── node_modules/
├── pages/                         # Page Object Model classes
│   ├── BasePage.ts
│   ├── CheckoutPage.ts
│   ├── HomePage.ts
│   └── ProductPage.ts
├── tests/                         # Test specifications
│   ├── checkOutProduct.spec.ts
│   └── types/
│       └── testData.d.ts          # Type declarations
├── utils/                         # Reusable helper functions
│   └── helpers-methods.ts
```

## Reporting

To generate and view the Allure report locally:

```bash
# Generate the Allure report
npx allure generate ./allure-results --clean

# Open the report
npx allure open
```

> Note: Allure reporter is configured via `reporter: ['list', ['allure-playwright']]` in `playwright.config.ts`.

## Scripts

```json
"scripts": {
  "test": "npx playwright test"
}
```
