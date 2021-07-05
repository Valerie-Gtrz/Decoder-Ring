// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    //early return for if cases
    if (!shift || shift < -25 || shift > 25) return false;
    //changed shift for decode
    if (!encode) shift *= -1;
    let lowerCaseInput = input.toLowerCase();
    const alphaArray = "abcdefghijklmnopqrstuvwxyz".split("");
    let newString = "";

    for (let letter of lowerCaseInput)
      if (!alphaArray.includes(letter)) newString += letter;
      else {
        let letterIndex = alphaArray.indexOf(letter);
        let indexShift = letterIndex + shift;
        indexShift =
          indexShift > 25
            ? indexShift -= 26
            : indexShift < 0
            ? indexShift += 26
            : indexShift;
        newString += alphaArray[indexShift];
      }
    return newString;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
