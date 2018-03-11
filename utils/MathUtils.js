"use strict";

module.exports = {
    floatsDiff: function (base, val) {
        var diff = val - base;

        return diff / (base / 100);
    }
}
