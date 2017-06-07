const sayHello = require("../index");

describe("test sayHello", function () {
    it("is right", function () {
        expect(sayHello()).toEqual("hello world");
    });
});