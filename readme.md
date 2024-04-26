
# CLI Exchange Rate

CLI Exchange Rate is a command-line interface (CLI) tool for accessing foreign exchange rate information using the ExchangeRate-API.

## Installation

To use CLI Exchange Rate, you can install it globally via npm:
```bash
npm install -g cli-exchange-rate
```

## Usage
CLI Exchange Rate provides several commands for interacting with exchange rate data. Here's how to use them:

### rate: Get the exchange rate between two currencies.

```bash
exchangeRateApp rate SOURCE_CURRENCY TARGET_CURRENCY
```
### history: Get the exchange rate history for a specific date.
```bash
exchangeRateApp history DATE BASE_CURRENCY
```
### currencies: Get a list of supported currencies.
```bash
exchangeRateApp currencies
```

### help: Display usage instructions.
```bash
exchangeRateApp help
```