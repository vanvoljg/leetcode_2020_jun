'use strict';

/**
 * @param {number} m Width of the grid (columns)
 * @param {number} n Height of the grid (rows)
 * @return {number}
 */
const uniquePaths = function (m, n) {
  let dp = new Array(m).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = m - 2; j >= 0; j--) {
      dp[j] = dp[j + 1] + dp[j]
    }
  }

  return dp[0];
};

const testRunner = (tests, func) => {
  const name = func.name;
  for (let [input, expected] of tests) {
    const result = func(...input);
    console.log({
      name,
      input,
      result,
      expected,
      pass: result === expected,
    });
  }
};

const test = () => {
  const tests = [
    [[7, 3], 28],
    [[3, 2], 3],
    [[1, 1], 1],
    [[10, 10], 48620],
  ];

  testRunner(tests, uniquePaths);
};

export default test();
