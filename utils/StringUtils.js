"use strict";

var dateFormat = require('dateformat');

module.exports = {
    floatToString: function (data, digits) {
        return data.toFixed(digits);
    },
    timeToString: function (time, format) {
        return dateFormat(time, format, true);
    }
}
