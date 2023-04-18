function capitalize(string) {
  if (!string) return null;
  const newString = string[0].toUpperCase() + string.slice(1);
  return newString;
}

function reverseString(string) {
  if (!string) return null;
  let returnString = string;
  if (typeof string === "number") returnString = String(returnString);
  return returnString.split("").reverse().join("");
}

const calculator = {
  add(...args) {
    if (args.length !== 2) return Error;
    return args[0] + args[1];
  },
  subtract(...args) {
    if (args.length !== 2) return Error;
    return args[0] - args[1];
  },
  divide(...args) {
    if (args.length !== 2 || args[1] === 0) return Error;
    return args[0] / args[1];
  },
  multiply(...args) {
    if (args.length !== 2) return Error;
    return args[0] * args[1];
  },
};

function caesarCipher(string, shift) {
  if (typeof string !== "string" || typeof shift !== "number") return Error;
  const newShift = shift > 26 ? shift - 26 : shift < -26 ? shift + 26 : shift;
  const returnString = string
    .split("")
    .map((letter, index) => {
      if (!letter.match(/[a-z]/i)) return letter;

      const oldASCIIcode = string.charCodeAt(index);
      let newASCIIcode = oldASCIIcode + newShift;
      const newLetter = String.fromCharCode(newASCIIcode);

      const isFromCapitalToLower =
        letter.match(/[A-Z]/) && newLetter.match(/[a-z]/);
      const isFromLowerToCapital =
        letter.match(/[a-z]/) && newLetter.match(/[A-Z]/);

      if (isFromCapitalToLower || isFromLowerToCapital) {
        newASCIIcode =
          oldASCIIcode + (isFromLowerToCapital ? 26 + newShift : newShift - 26);
      }

      if (!newLetter.match(/[a-z]/i)) newASCIIcode += newShift > 0 ? -26 : 26;

      return String.fromCharCode(newASCIIcode);
    })
    .join("");
  return returnString;
}

function analyzeArray(array) {
  if (!Array.isArray(array)) return Error;
  const { length } = array;

  const average = array.reduce((prev, curr) => (prev += curr), 0) / length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  return {
    average,
    min,
    max,
    length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
