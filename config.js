var config = {};

config.currencyRatesDAO = "coinmarketcap";
config.currencyRatesDAO.API_URL = "https://api.coinmarketcap.com/v1/ticker";
config.currencyRatesDAO.convert = "USD";
config.refreshPeriod = 10 * 1000;

config.watchCurrency = "bitcoin";

module.exports = config;