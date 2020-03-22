const { logCall, logReturn } = require('./utils/logging');

/**
 * Write a recursive function that takes an integer n
 * and returns its string representation.
 * DO NOT USE `.toString()` :)
 *
 * Ex: intToString(7); // "7"
 * intToString(47); // "47"
 * intToString(54321); // "54321"
 */
const intToString = n => {
  logCall(intToString, n);
  // We use this array to convert single digits to strings
  const intToStringMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // base case: a one-digit number
  if (n < 10) {
    logReturn(intToString, intToStringMap[n]);
    return intToStringMap[n];
  }

  // Remove last digit and recurse to base case
  const firstDigits = Math.trunc(n / 10);
  const lastDigit = n % 10;
  const res = intToString(firstDigits) + intToString(lastDigit);
  logReturn(intToString, res, n);
  return res;
};

console.log(intToString(54321));
