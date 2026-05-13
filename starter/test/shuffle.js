const { expect } = require("chai");
const { shuffle } = require("../starter/src/shuffle.js");

describe("shuffle function", () => {
  it("should return same length", () => {
    const arr = [1, 2, 3, 4];
    const result = shuffle(arr);

    expect(result.length).to.equal(arr.length);
  });

  it("should contain same elements", () => {
    const arr = [1, 2, 3, 4];
    const result = shuffle(arr);

    expect(result.sort()).to.deep.equal(arr.sort());
  });
});