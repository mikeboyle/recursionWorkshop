const { logCall, logReturn } = require('./utils/logging');

/**
 * Given a SORTED array of integers and an integer n,
 * write an algorithm that returns true if n is in the array
 * (or false if it is not in the array)
 *
 * Use recursion to solve this problem faster than linear time.
 * Hint 1: The array is sorted. How does this help you?
 *
 * Hint 2: Imagine you're looking for a word in a paper dictionary.
 * Where would you start looking? What would you do if you didn't see it
 * in the first place you looked?
 *
 * Hint 3: I'm thinking of a number between 0-100 and you have
 * to guess it in the fewest guesses. What would you guess first?
 *
 * Ex: arr = [3, 5, 6, 8, 9, 11, 13, 24, 33, 45, 57, 80, 99, 131, 333, 500]
 * binarySearch(arr, 6); // true
 * binarySearch(arr, 500); // true
 * binarySearch(arr, 66); // false
 */
const binarySearch = (arr, n) => {
  // base case: arr is length 1
  if (arr.length === 1) {
    return arr[0] === n;
  }

  // check the midpoint of the array; return true if found
  const mid = Math.trunc(arr.length / 2);
  if (arr[mid] === n) {
    return true;
  }

  // recurse with divide and conquer:
  // call binarySearch on either the right or left half
  if (n < arr[mid]) {
    const leftHalf = arr.slice(0, mid);
    return binarySearch(leftHalf, n);
  } else {
    const rightHalf = arr.slice(mid, arr.length);
    return binarySearch(rightHalf, n);
  }
};

const arr = [3, 5, 6, 8, 9, 11, 13, 24, 33, 45, 57, 80, 99, 131, 333, 500];

console.log(binarySearch(arr, 6)); // true
console.log(binarySearch(arr, 500)); // true
console.log(binarySearch(arr, 66)); // false
