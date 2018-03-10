"use strict";

var config = require("../config");
var CurrencyRates = require(`../dao/${config.currencyRatesDAOProvider}`);
var SocketRates = require(`../dao/${config.socketRatesDAOProvider}`);

var options = {
    API_URL: config.currencyRatesDAOAPI_URL,
    convert: config.currencyRatesConvert
};

var rates = new CurrencyRates(options);
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
    getRateByCurrency: function (currency, callback) {
        rates.getRateByCurrency(currency, callback);
    },
    subscribeTrades: function (currency, callback) {
        onNewTradeCallback = callback;

        SocketRates.subscribeTrades(onNewTrade);
    }
}
