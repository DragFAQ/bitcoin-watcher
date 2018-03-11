var config = {};

config.currencyRatesDAOProvider = "coinmarketcap";
config.currencyRatesDAOAPI_URL = "https://api.coinmarketcap.com/v1/ticker";
config.currencyRatesConvert = "USD";
config.refreshPeriod = 10 * 1000;
config.tradeRateDAOProvider = "cexio";
config.tradeRateDAOSocketUrl = "wss://ws.cex.io/ws/";

config.coin = "bitcoin";
config.coinCode = "BTC";

module.exports = config;
