"use strict";

module.exports = {
    floatsDiff: function (base, val) {
        var diff = val - base;

        if (base == 0 || isNaN(base) || isNaN(val))
            return 0;
        else
            return diff / (base / 100);
    }
}
