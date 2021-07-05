// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    let message = "";
    const orderedAlpha = "abcdefghijklmnopqrstuvwxyz";
    smolInput = input.toLowerCase();
    //check alphabet length
    if (alphabet.length !== 26 || !alphabet) return false;
    //check for repeating chracters
    for (var i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) {
        return false;
      }
    }
    //encode
    if (encode) {
      for (let letter of smolInput) {
        if (orderedAlpha.includes(letter)) {
          letterIndex = orderedAlpha.indexOf(letter);
          message += alphabet[letterIndex];
        } else {
          if (letter === " ") {
            message += letter;
          }
        }
      }
      return message;
    }
    //decode
    if (!encode) {
      for (let letter of smolInput) {
        if (alphabet.includes(letter)) {
          letterIndex = alphabet.indexOf(letter);
          message += orderedAlpha[letterIndex];
        } else {
          if (letter === " ") {
            message += letter;
          }
        }
      }
      return message;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };