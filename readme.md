# CLI Exchange Rate

A command-line interface (CLI) tool for accessing foreign exchange rate information using the ExchangeRate-API.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Add your ExchangeRate-API key to the `.env` file:

    ```
    API_KEY=YOUR_API_KEY
    ```

## Usage

The CLI supports the following commands:

- **rate**: Get the exchange rate between two currencies.
  ```bash
  exchangeRateApp rate SOURCE_CURRENCY TARGET_CURRENCY