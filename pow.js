const { logCall, logReturn } = require('./utils/logging');

/**
 * Write a recursive function that takes two
 * integers, a base and an exponent, and calculates
 * the result.
 * Ex: pow(3, 2); // 3^2 = 9
 * pow(2, 1); // 2^1 = 2
 * pow(2, 3); // 2^3 = 8
 * pow(2, 7); // 2^7 = 128
 * pow(10, 0); // 10^0 = 1
 */
const pow = (base, exp) => {
  logCall(pow, base, exp);
  // base cases
  if (exp === 0) {
    logReturn(pow, 1, base, exp);
    return 1;
  }
  if (exp === 1) {
    logReturn(pow, base, base, exp);
    return base;
  }
  // recurse to base case
  const res = base * pow(base, exp - 1);
  logReturn(pow, res, base, exp);
  return res;
};

pow(2, 7);
