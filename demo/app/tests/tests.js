var Reviews = require("nativescript-reviews").Reviews;
var reviews = new Reviews();

describe("greet function", function() {
    it("exists", function() {
        expect(reviews.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(reviews.greet()).toEqual("Hello, NS");
    });
});