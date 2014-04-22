describe("tests for getRhymes", function() {

    var tssModule = require('../lib/index');

    console.log('tssModule is ', tssModule);

    it("returns some data", function(done) {
        return tssModule.getQuoteOfTheDay()
            .then(function (d) {
                expect(d).toNotBe(null);

                expect(d.contents.quote).toBeDefined();

                console.log(d);

                done();
            });
    });

    it("returns a quote", function(done) {
        return tssModule.getQuoteOfTheDay()
            .then(function (d) {
                expect(d.contents.quote).toBeDefined();

                console.log(d);

                done();
            });
    });

});