'use strict';

/**
 * @param {number} m Width of the grid (columns)
 * @param {number} n Height of the grid (rows)
 * @return {number}
 */
const uniquePaths = function (m, n) {
  let dp = new Array(n).fill(1); // dp[i] = number of possible moves to reach finish
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(1);
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[n - 1][m - 1];
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
    [[50, 50], 50],
  ];

  testRunner(tests, uniquePaths);
};

export default test();
