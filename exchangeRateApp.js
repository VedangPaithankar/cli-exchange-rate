#!/usr/bin/env node

const axios = require('axios');
const args = process.argv.slice(2);
const command = args[0];

if (command === 'rate') {
    getExchangeRate(args[1], args[2]);
} else if (command === 'history') {
    getExchangeRateHistory(args[1], args[2]);
} else if (command === 'currencies') {
    getCurrencies();
} else if (command === 'help') {
    displayHelp();
} else {
    console.log('Invalid command. Please use "rate", "history", or "currencies".');
}

async function getExchangeRate(sourceCurrency, targetCurrency) {
    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/836585d4c2671264136fd1cb/latest/${sourceCurrency}`);
        const rate = response.data.conversion_rates[targetCurrency];
        console.log(`1 ${sourceCurrency} equals ${rate} ${targetCurrency}`);
    } catch (error) {
        console.error('Error fetching exchange rate:', error.message);
    }
}

async function getExchangeRateHistory(date, baseCurrency) {
    try {
        const [year, month, day] = date.split('-');
        console.log(year, "-", month, "-", day)
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/836585d4c2671264136fd1cb/history/${baseCurrency}/${year}/${month}/${day}`);
        const { result, conversion_rates } = response.data;

        if (result === 'success') {
            console.log(`Exchange rates for ${baseCurrency} on ${date}:`);
            Object.entries(conversion_rates).forEach(([currency, rate]) => {
                console.log(`${currency}: ${rate}`);
            });
        } else {
            console.error('Error fetching exchange rate history:', response.data);
        }
    } catch (error) {
        console.error('Error fetching exchange rate history:', error.message);
    }
}

async function getCurrencies() {
    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/836585d4c2671264136fd1cb/codes`);
        const currencies = response.data.supported_codes;
        console.log('Supported currencies:');
        currencies.forEach(currency => {
            console.log(currency);
        });
    } catch (error) {
        console.error('Error fetching supported currencies:', error.message);
    }
}

function displayHelp() {
    console.log('Usage:');
    console.log('  exchangeRateApp rate SOURCE_CURRENCY TARGET_CURRENCY');
    console.log('  exchangeRateApp history DATE BASE_CURRENCY');
    console.log('  exchangeRateApp currencies');
    console.log('  exchangeRateApp help');
    console.log('');
    console.log('Commands:');
    console.log('  rate         Get the exchange rate between two currencies');
    console.log('  history      Get the exchange rate history for a specific date');
    console.log('  currencies   Get a list of supported currencies');
    console.log('  help         Display usage instructions');
}