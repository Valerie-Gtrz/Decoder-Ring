const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");

describe("substitutionModule.substitution", () => {
  it("Spaces should be maintained throughout.", () => {
    const expected = false;
    const actual1 = caesarModule.caesar("zero", alphabet, encode = true);
    expect(actual1).to.equal(expected);
  });
  it("Capital letters can be ignored.", () => {
    const wrap = "";
    const wrap1 = substitutionModule.substitution("z", alphabet, encode = true);
    expect(wrap).to.equal(wrap1);
  });
  it("The `alphabet` parameter must be a string of exactly 26 characters. Otherwise, it should return `false`.", () => {
    const caps = "";
    const capsActual = substitutionModule.substitution("ABC", alphabet, encode = true);
    expect(caps).to.equal(capsActual);
  });
  it("All the characters in the `alphabet` parameter must be unique. Otherwise, return `false", () => {
    const nonAlpha = "";
    const nonAlphaActual = substitutionModule.substitution("z a/b", alphabet, encode = true);
    expect(nonAlpha).to.equal(nonAlphaActual);
  });
});
