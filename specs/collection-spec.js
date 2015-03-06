var Collection = require("../collection");
describe("length", function() {
  it("should be initially empty", function() {
    var collection = new Collection();
    expect(collection.length()).toBe(0);
  });
  it("should be 1 after push", function() {
    var collection = new Collection();
    collection.push(0);
    expect(collection.length()).toBe(1);
  });
  it("should be empty after pop", function() {
    var collection = new Collection();
    collection.push(0);
    collection.pop();
    expect(collection.length()).toBe(0);
  });
});
describe("first", function() {
  it("should be initially undefined", function() {
    var collection = new Collection();
    expect(collection.first()).toBe(undefined);
  });
  it("should return first element", function() {
    var collection = new Collection();
    collection.push(0);
    expect(collection.first()).toBe(0);
  });
  it("should return first element if there are multiple elements", function() {
    var collection = new Collection();
    collection.push(0);
    collection.push(1);
    expect(collection.first()).toBe(0);
  });
});
