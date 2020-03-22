const { logCall, logReturn } = require('./utils/logging');
/**
 * Write a recursive function that caculates the factorial of n.
 * n is guaranteed to be a positive integer.
 * Examples:
 * 1! = 1
 * 2! = 2 * 1 = 2
 * 3! = 3 * 2 * 1 = 6
 * 4! = 4 * 3 * 2 * 1 = 24
 */

const factorial = n => {
  logCall(factorial, n);
  // base case
  if (n === 1) {
    logReturn(factorial, 1, n);
    return 1;
  }
  // Recurse with a part of the input or problem.
  // We want to reduce the input to the base case.
  const res = n * factorial(n - 1);
  logReturn(factorial, res, n);
  return res;
};

factorial(7);
