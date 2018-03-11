"use strict";

var WebSocket = require("ws");

class tradeRateDao {
    constructor(options = {}) {
        this.socketUrl = options.socketUrl || "wss://ws.cex.io/ws/";
        this.convert = options.convert || "USD";
        this.socket = new WebSocket(this.socketUrl);
        this.coinCode = options.coinCode || "BTC";

        this.socket.on('open', function open() {
            var outgoingMessage = '{"e": "subscribe", "rooms": ["tickers"]}';

            this.send(outgoingMessage);
            return false;
        });

        let obj = this;
        this.socket.on('message', function incoming(message) {
            try {
                var data = JSON.parse(message);
                if (data["e"] == "tick" &&
                    data["data"]["symbol1"] == obj.coinCode &&
                    data["data"]["symbol2"] == obj.convert) {

                    obj.callback(data["data"]["price"]);
                }
            } catch (err) {
            }
        });
    }

    subscribeTrades(callback) {
        this.callback = callback;
        this.socket.OPEN;
    }
}

module.exports = tradeRateDao;
