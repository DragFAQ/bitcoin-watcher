"use strict";

var WebSocket = require("ws");

var socket = new WebSocket("wss://ws.cex.io/ws/");

module.exports = {
    subscribeTrades: function (event) {
        socket.onmessage = event;

        socket.OPEN;
    }
}

socket.onopen = function () {
    var outgoingMessage = '{"e": "subscribe", "rooms": ["tickers"]}';

    socket.send(outgoingMessage);
    return false;
}
