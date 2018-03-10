"use strict";

var service = require("./services/CurrencyRatesService");
var config = require("./config");
var sleep = require("system-sleep");

var currentRate = 0;

function setRate(data) {
    if (data)
        currentRate = data;
    console.log(data);
}

function onNewTrade(rate) {
    console.log(rate);
}

service.subscribeTrades(config.watchCurrency, onNewTrade);

while (true) {
    service.getRateByCurrency(config.watchCurrency, setRate);
    sleep(config.refreshPeriod);
}
