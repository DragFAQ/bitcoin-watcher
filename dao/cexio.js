"use strict";

var WebSocket = require("ws");

class tradeRateDao {
    constructor(options = {}) {
        this.socketUrl = options.socketUrl || "wss://ws.cex.io/ws/";
        this.convert = options.convert || "USD";
        this.socket = new WebSocket(this.socketUrl);
        this.coin = options.coinCode;
    }

    subscribeTrades(event) {
        socket.onmessage = event;

        socket.OPEN;
    }

socket.onopen = function () {
    var outgoingMessage = '{"e": "subscribe", "rooms": ["tickers"]}';

    socket.send(outgoingMessage);
    return false;
}
}

module.exports = tradeRateDao;
