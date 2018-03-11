"use strict";

var service = require("./services/CurrencyRatesService");
var config = require("./config");
var sleep = require("system-sleep");
var strUtils = require("./utils/StringUtils");
var mathUtils = require("./utils/MathUtils");

var currentRate = 0.0;
var lastDiff = 0.0;

function setRate(data) {
    if (data)
        currentRate = data;
//    console.log(data);
}

function onNewTrade(rate) {
//    console.log(rate);

    var diff = mathUtils.floatsDiff(currentRate, rate);
    if (diff != lastDiff) {
        lastDiff = diff;
//        console.log(diff);
        
        console.log(strUtils.timeToString(new Date(), config.timeFormat) + " - " + strUtils.floatToString(diff, config.floatDigits));
    }
}

service.subscribeTrades(onNewTrade);

while (true) {
    service.getRate(setRate);
    sleep(config.refreshPeriod);
}
