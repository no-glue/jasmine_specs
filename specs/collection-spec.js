var Collection = require("../collection");
describe("length", function() {
  it("the length should be 1 after push", function() {
    var collection = new Collection();
    collection.push(0);
    expect(collection.length()).toBe(1);
  });
});
