"use strict";

var request = require("request");

class currencyRatesDao {
    constructor(options={}){
        this.API_URL = options.API_URL || "https://api.coinmarketcap.com/v1/ticker";
        this.convert = options.convert || "USD";
        this.convert = this.convert.toLowerCase();
        this.coin = options.coin || "bitcoin";
    }

    getRate(callback) {
        request(this.API_URL + `/${this.coin}/?convert=${this.convert}`, (error, response, body) => {
            if(error) {
                callback(false);
            }
            if(response && response.statusCode === 200) {
                let data;
                try {
                    data = JSON.parse(body);
                    callback(data[0][`price_${this.convert}`]);
                } catch (err) {
                    data = false;
                }
            } else {
                callback(false);
            }
            return this;
        });
    }
}

module.exports = currencyRatesDao;
