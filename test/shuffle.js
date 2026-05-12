const { expect } = require("chai");
const { shuffle } = require("../starter/src/shuffle.js");

describe("shuffle function", () => {
  it("should return array with same length", () => {
    const arr = [1, 2, 3, 4];
    const result = shuffle(arr);

    expect(result.length).to.equal(arr.length);
  });

  it("should contain same values", () => {
    const arr = [1, 2, 3, 4];
    const result = shuffle(arr);

    expect(result.sort()).to.deep.equal(arr.sort());
  });
});