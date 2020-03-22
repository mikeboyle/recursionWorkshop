const { logCall, logReturn } = require('./utils/logging');

/**
 * Write a recursive function that takes an integer n and a base b,
 * and returns a string representing the integer n in base b.
 * You are guaranteed that b >= 2 and b <= 16
 *
 * Helpful link: https://www.rapidtables.com/convert/number/base-converter.html
 *
 * Ex: intToBase(47, 2); // "101111"
 * intToBase(47, 8); // "57"
 * intToBase(47, 10); // "47"
 * intToBase(47, 16); // "2f"
 *
 * Hint: Is this very different from intToBase()?
 */
const intToBase = (n, base) => {
  logCall(intToBase, n);
  // We use this array to convert single digits to strings
  const intToBaseStringMap = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  // base case: a one-digit number
  if (n < base) {
    logReturn(intToBase, intToBaseStringMap[n]);
    return intToBaseStringMap[n];
  }

  // Remove last digit and recurse to base case
  const firstDigits = Math.trunc(n / base);
  const lastDigit = n % base;
  const res = intToBase(firstDigits, base) + intToBase(lastDigit, base);
  logReturn(intToBase, res, n);
  return res;
};

console.log(intToBase(47, 2)); // "101111"
console.log(intToBase(47, 8)); // "57"
console.log(intToBase(47, 10)); // "47"
console.log(intToBase(47, 16)); // "2f"
