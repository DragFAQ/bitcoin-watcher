'use strict'

var request = require('request');

class CurrencyRatesDAO {
    constructor(options={}){
        this.API_URL = options.API_URL || "https://api.coinmarketcap.com/v1/ticker";
        this.convert = options.convert || "USD";
        this.convert = this.convert.toLowerCase();
    }

    getRateByCurrency(currency, callback) {
        request(this.API_URL + `/${currency}/?convert=${this.convert}`, (error, response, body) => {
            if(error) {
                callback(false);
                return this;
            }
            if(response && response.statusCode == 200){
                var data;
                try {
                    data = JSON.parse(body);
                } catch (err) {
                    // Don't crash on unexpected JSON
                    data = false;
                }
                callback(data[0]["price_" + this.convert])
            } else {
                callback(false);
                return this;
            }
        });
    }
}

module.exports = CurrencyRatesDAO;