/**
 * Power of Two
 * Write a function to determine if a given integer is a power of two
 */

/**
 * @param {integer} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  if (n <= 0) return false;

  while (n > 2) {
    if (n % 2 != 0) return false;
    n /= 2;
  }

  if (n == 2 || n == 1) return true;
};

const isPowerOfTwoTricky = function (n) {
  if (n <= 0) return false;
  return !(n & (n - 1));
};

const run = function () {
  let t1 = 1;
  let t2 = 16;
  let t3 = 218;
  console.log(isPowerOfTwo(t1), isPowerOfTwo(t2), isPowerOfTwo(t3));
};

run();
