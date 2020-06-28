'use strict';

/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  // This seems like a dynamic programming style problem
  // Memoization would be the better way than tabulation, because we're not guaranteed
  // to need every solution
  // let cache(n) be the number of squares necessary to sum to 'n'
  let cache = new Map();
  const num = numSquaresMemo(n, cache);
  return num;
}

function numSquaresMemo(n, cache) {
  if (n < 4) return n;
  if (cache.has(n)) return cache.get(n);
  const sqrtInt = Math.floor(Math.sqrt(n));
  let count = n;
  for (let i = 1; i <= sqrtInt; i++) {
    count = Math.min(count, numSquaresMemo(n - i * i, cache) + 1);
  }
  cache.set(n, count);
  return count;
}

function testRunner(tests, func) {
  const name = func.name;
  for (let [input, expected] of tests) {
    const result = func(input);
    console.log({
      name,
      input,
      result,
      expected,
      pass: result === expected,
    });
  }
}

function test() {
  const tests = [
    [4, 1],
    [5, 2],
    [10, 2],
    [13, 2],
    [12, 3],
    [143, 4],
  ];

  testRunner(tests, numSquares);
}

export default test();
