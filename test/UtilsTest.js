var assert = require("assert");
var mathUtils = require("../utils/MathUtils");
var strUtils = require("../utils/StringUtils");

describe('#floatsDiff()', function () {
    describe('Success', function () {
        it('should return 10 when 100 and 110', function () {
            assert.equal(mathUtils.floatsDiff(100, 110), 10);
        });
    });

    describe('Success negative', function () {
        it('should return -10 when 100 and 90', function () {
            assert.equal(mathUtils.floatsDiff(100, 90), -10);
        });
    });

    describe('Zero', function () {
        it('should return 0 when 0 and 0', function () {
            assert.equal(mathUtils.floatsDiff(0, 0), 0);
        });
    });

    describe('NaN', function () {
        it('should return 0 when NaN and 110', function () {
            assert.equal(mathUtils.floatsDiff(NaN, 110), 0);
        });
    });

    describe('Not number', function () {
        it('should return 0 when "s" and 100', function () {
            assert.equal(mathUtils.floatsDiff("s", 100), 0);
        });
    });

});

describe('#floatToString()', function () {
    describe('Success', function () {
        it('should return "5.5555" when 5.5555 and 4 digits', function () {
            assert.equal(strUtils.floatToString(5.5555, 4), "5.5555");
        });
    });

    describe('Success round', function () {
        it('should return "5.556" when 5.5555 and 3 digits', function () {
            assert.equal(strUtils.floatToString(5.5555, 3), "5.556");
        });
    });

    describe('Zero digits', function () {
        it('should return "6" when 5.5555 and 0 digits', function () {
            assert.equal(strUtils.floatToString(5.5555, 0), "6");
        });
    });

    describe('Zero', function () {
        it('should return "0.0000" when 0 and 4 digits', function () {
            assert.equal(strUtils.floatToString(0, 4), "0.0000");
        });
    });

    describe('Negative', function () {
        it('should return "-1.0000" when -1 and 4 digits', function () {
            assert.equal(strUtils.floatToString(-1, 4), "-1.0000");
        });
    });

    describe('NaN', function () {
        it('should return "0" when NaN and 4 digits', function () {
            assert.equal(strUtils.floatToString(NaN, 4), "0");
        });
    });

    describe('Not number', function () {
        it('should return "0" when "s" and 4 digits', function () {
            assert.equal(strUtils.floatToString("s", 4), "0");
        });
    });
});

describe('#timeToString()', function () {
    describe('Success', function () {
        it('should return "10:20" when "2011-0-1 0:10:20:0000" and "MM:ss"', function () {
            var date = new Date(2011, 0, 1, 0, 10, 20, 0);

            assert.equal(strUtils.timeToString(date, "MM:ss"), "10:20");
        });
    });

    //and so on...

});
