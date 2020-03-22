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
const intToBase = (n, base) => {};

console.log(intToBase(47, 2)); // "101111"
console.log(intToBase(47, 8)); // "57"
console.log(intToBase(47, 10)); // "47"
console.log(intToBase(47, 16)); // "2f"
