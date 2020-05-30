const assert = require("assert");

describe("Language1", function() {
  it("test1", () => {
    assert.equal(1, 1);
    console.log("test1");
  });
});

describe("Language2", function() {
  it("test2", () => {
    assert.equal(1, 1);
  });
  
  it("test3", () => {
    assert.equal(1, 2);
  });
});