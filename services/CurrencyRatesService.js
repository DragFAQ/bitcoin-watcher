'use strict';

var config = require('../config');
var CurrencyRates = require('../dao/' + config.currencyRatesDAO);

var options = {
    API_URL: config.currencyRatesDAO.API_URL,
    convert: config.currencyRatesDAO.convert
};

var rates = new CurrencyRates(options);

module.exports = {
    getRateByCurrency: function (currency, callback) {
        rates.getRateByCurrency(currency, callback);
    }
}
