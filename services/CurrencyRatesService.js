"use strict";

var config = require("../config");
var CurrencyRates = require(`../dao/${config.currencyRatesDAOProvider}`);
var SocketRates = require(`../dao/${config.tradeRateDAOProvider}`);

var options = {
    API_URL: config.currencyRatesDAOAPI_URL,
    convert: config.currencyRatesConvert,
    coin: config.coin,
    coinCode: config.coinCode,
    socketUrl: config.tradeRateDAOSocketUrl
};

var rates = new CurrencyRates(options);
var tradeRates = new SocketRates(options);

module.exports = {
    getRateByCurrency: function (callback) {
        rates.getRateByCurrency(callback);
    },
    subscribeTrades: function (callback) {
        tradeRates.subscribeTrades(callback);
    }
}
