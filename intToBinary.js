const { logCall, logReturn } = require('./utils/logging');

/**
 * Write a recursive function that takes an integer n
 * and returns its BINARY string representation.
 *
 * Helpful link: https://www.rapidtables.com/convert/number/base-converter.html
 *
 * Ex: intToBinary(0); // "0"
 * intToBinary(1); // "1"
 * intToBinary(2); // "10"
 * intToBinary(3); // "11"
 * intToBinary(13); // "1101"
 * intToBinary(47); // "101111"
 *
 * Hint: Is this very different from intToString()?
 */
const intToBinary = n => {
  logCall(intToBinary, n);
  // We use this array to convert single digits to strings
  const intToBinaryStringMap = ['0', '1'];

  // base case: a one-digit number
  if (n < 2) {
    logReturn(intToBinary, intToBinaryStringMap[n]);
    return intToBinaryStringMap[n];
  }

  // Remove last digit and recurse to base case
  const firstDigits = Math.trunc(n / 2);
  const lastDigit = n % 2;
  const res = intToBinary(firstDigits) + intToBinary(lastDigit);
  logReturn(intToBinary, res, n);
  return res;
};

console.log(intToBinary(1)); // "1"
console.log(intToBinary(2)); // "10"
console.log(intToBinary(3)); // "11"
console.log(intToBinary(13)); // "1101"
console.log(intToBinary(47)); // "101111"
