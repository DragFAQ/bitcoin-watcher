"use strict";

var service = require("./services/CurrencyRatesService");
var config = require("./config");
var sleep = require("system-sleep");

function showRate(data) {
    console.log(data);
}

while (true) {
    service.getRateByCurrency(config.watchCurrency, showRate);
    sleep(config.refreshPeriod);
}