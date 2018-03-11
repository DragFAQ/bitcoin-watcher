"use strict";

var dateFormat = require('dateformat');

module.exports = {
    floatToString: function (data, digits) {
        if (isNaN(data) || isNaN(digits))
            return 0;
        else
            return data.toFixed(digits);
    },
    timeToString: function (time, format) {
        return dateFormat(time, format, true);
    }
}
