# Currency Converter

A simple currency converter web app using live rates from a migrated CDN-based API.

## How to use

1. Open `index.html` in your browser.
2. Enter an amount.
3. Choose the source currency and destination currency.
4. Click **Get Exchange Rate**.

## Fix applied

- Updated `app.js` to use the migrated API endpoint:
  - `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1`
- Changed the lookup pattern to request `/currencies/{from}.json`.
- Updated rate extraction to use `data[fromCurrency][toCurrency]`.
- Added safer parsing for the amount input.

## Files

- `index.html` - UI layout and script includes
- `codes.js` - currency-to-country code list
- `app.js` - fetch logic, dropdown population, and conversion display
- `style.css` - page styling

## Notes

- If the app is served locally, use a simple local server for best browser support.
- If the API still fails, verify network/CORS settings and the latest CDN availability.
