const { logCall, logReturn } = require('./utils/logging');
/**
 * Write a recursive function that returns the nth number
 * in the fibonacci sequence (starting from n = 0).
 *
 * For this function, the fibonacci sequence starts 0, 1, ...
 * Ex: fibonacci(0); // 0
 * fibonacci(1); // 1
 * fibonacci(2); // 1
 * fibonacci(3); // 2
 * fibonacci(7); // 13
 */
const fibonacci = n => {
  logCall(fibonacci, n);
  const nums = [0, 1];
  // base case
  if (n < 2) {
    const res = nums[n];
    logReturn(fibonacci, res, n);
    return res;
  }

  // call fibonacci on subproblem
  // and recurse to the base case
  const res = fibonacci(n - 2) + fibonacci(n - 1);
  logReturn(fibonacci, res, n);
  return res;
};

fibonacci(7);
