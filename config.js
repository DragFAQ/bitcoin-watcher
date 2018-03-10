var config = {};

config.currencyRatesDAOProvider = "coinmarketcap";
config.currencyRatesDAOAPI_URL = "https://api.coinmarketcap.com/v1/ticker";
config.currencyRatesConvert = "USD";
config.refreshPeriod = 10 * 1000;
config.socketRatesDAOProvider = "cexio";

config.watchCurrency = "bitcoin";
config.watchCurrencyCode = "BTC";

module.exports = config;
