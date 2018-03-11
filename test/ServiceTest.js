var expect = require('chai').expect;
var service = require("../services/CurrencyRatesService");

describe('#getRate()', function () {
    describe('Success', function () {
        it('should get number greater than 0', function (done) {
            service.getRate(function (rate) {
                expect(rate).to.be.above(0);    
            });
            done();
        });
    });
});