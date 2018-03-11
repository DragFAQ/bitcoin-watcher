"use strict";

var config = require("../config");
var CurrencyRates = require(`../dao/${config.currencyRatesDAOProvider}`);
var SocketRates = require(`../dao/${config.socketRatesDAOProvider}`);

var options = {
    API_URL: config.currencyRatesDAOAPI_URL,
    convert: config.currencyRatesConvert,
    coin: config.coin,
    coinCode: config.coinCode,
    socketUrl: config.tradeRateDAOSocketUrl
};

var rates = new CurrencyRates(options);
var tradeRates = new tradeRateDao(options);
var onNewTradeCallback;

function onNewTrade(event) {
    try {
        var data = JSON.parse(event.data);
        if (data["e"] == "tick" &&
            data["data"]["symbol1"] == config.watchCurrencyCode &&
            data["data"]["symbol2"] == config.currencyRatesConvert) {

            onNewTradeCallback(data["data"]["price"]);
        }
    } catch (err) {
    }
}

module.exports = {
    getRateByCurrency: function (callback) {
        rates.getRateByCurrency(callback);
    },
    subscribeTrades: function (currency, callback) {
        onNewTradeCallback = callback;

        SocketRates.subscribeTrades(onNewTrade);
    }
}
