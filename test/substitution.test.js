const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");

describe("substitutionModule.substitution", () => {
  it("Spaces should be maintained throughout.", () => {
    const keepSpaces = "jrufs cpw";
    const keepSpacesActual = substitutionModule.substitution("think ful", "xoyqmcgrukswaflnthdjpzibev", encode = true);
    expect(keepSpacesActual).to.equal(keepSpaces);
  });
  it("Capital letters can be ignored.", () => {
    const capital = "jrufscpw";
    const capitalActual = substitutionModule.substitution("tHinkFul", "xoyqmcgrukswaflnthdjpzibev", encode = true);
    expect(capital).to.equal(capitalActual);
  });
  it("The `alphabet` parameter must be a string of exactly 26 characters. Otherwise, it should return `false`.", () => {
    const length = false;
    const lengthActual = substitutionModule.substitution("abc","xoyqmcgrukswaflthdjpzibev", encode = true);
    expect(lengthActual).to.equal(length);
  });
  it("All the characters in the `alphabet` parameter must be unique. Otherwise, return `false", () => {
    const noRepeats = false;
    const noRepeatsActual = substitutionModule.substitution("zab", "xooqmcgrukswaflnthdjpzibev", encode = true);
    expect(noRepeatsActual).to.equal(noRepeats);
  });
  it("should return false if the substitution alphabet is missing", () => {
    const ifEmpty = false;
    const ifEmptyActual = substitutionModule.substitution("zab", "", encode = true);
    expect(ifEmptyActual).to.equal(ifEmpty);
  });
});
