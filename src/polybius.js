// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphaArray = [
    ["a", 11],
    ["b", 21],
    ["c", 31],
    ["d", 41],
    ["e", 51],
    ["f", 12],
    ["g", 22],
    ["h", 32],
    ["i", 42],
    ["j", 42],
    ["k", 52],
    ["l", 13],
    ["m", 23],
    ["n", 33],
    ["o", 43],
    ["p", 53],
    ["q", 14],
    ["r", 24],
    ["s", 34],
    ["t", 44],
    ["u", 54],
    ["v", 15],
    ["w", 25],
    ["x", 35],
    ["y", 45],
    ["z", 55],
  ];
  const numArray = [
    ["a", 11],
    ["b", 21],
    ["c", 31],
    ["d", 41],
    ["e", 51],
    ["f", 12],
    ["g", 22],
    ["h", 32],
    ["(i/j)", 42],
    ["k", 52],
    ["l", 13],
    ["m", 23],
    ["n", 33],
    ["o", 43],
    ["p", 53],
    ["q", 14],
    ["r", 24],
    ["s", 34],
    ["t", 44],
    ["u", 54],
    ["v", 15],
    ["w", 25],
    ["x", 35],
    ["y", 45],
    ["z", 55],
  ];

  function polybius(input, encode = true) {
    let outputString = "";

    //encode
    if (encode) {
      const inputArray = input.toLowerCase().split("");
      for (let letter of inputArray) {
        const matching = alphaArray.find((pairs) => letter === pairs[0]);
        if (!letter.match(/[a-z]/)) {
          outputString += letter;
        } else outputString += matching[1];
      }
      return outputString;
    }

    //decode
    if (!encode) {
      //check for even number of letters only
      let trimInput = input.replace(/ /g, "");
      let outputArray = [];

      //early return if string is uneven
      if (!(trimInput.split("").length % 2 === 0)) return false;

      //accumlator pairs numbers and keeps spaces
      for (i = 0; i < input.length; i = i+2) {
        let thisNum = input[i];
        let nextNum = input[i + 1];

        if (thisNum === " ") {
          outputArray.push(" ");
          i = i - 1;
        } else {
          outputArray.push(`${thisNum}${nextNum}`);
        }
      }

      //loop through new array and match number to letter
      for (let number of outputArray) {

        if (number === " ") outputString += number;
        else {
          const numberMatch = numArray.filter(
            (pairedSets) => number == pairedSets[1]
          );
          outputString += numberMatch[0][0];
        }
      }
      return outputString;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
