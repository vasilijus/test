var app = require('../Add.js');

describe("Addition", function() {
    it("The function should add 2 numbers", function () {
        var value = app.AddNumber( 2, 4 );

        expect(value).toBe(5);
    })
})