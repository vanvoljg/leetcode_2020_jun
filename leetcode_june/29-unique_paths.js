'use strict';

/**
 * @param {number} m Width of the grid
 * @param {number} n Height of the grid
 * @return {number}
 */
const uniquePaths = function(m, n) {
  let cols = m;
  let rows = n;
  let dp = new Array(rows).fill(0); // dp[i] = number of possible moves to reach finish
  for (let i = 0; i < rows; i++) {
    dp[i] = new Array(cols).fill(0);
  }

  // In all following: i selects row, j selects column
  // far right column and bottom row each only have a single path they can take
  // fill all of them with 1
  // fill bottom row, fix i = rows - 1
  for (let i = rows - 1, j = 0; j < cols; j++) {
    dp[i][j] = 1;
  }
  // fill right col, fix j = cols - 1
  for (let i = 0, j = cols - 1; i < rows - 1; i++) {
    dp[i][j] = 1;
  }

  for (let i = rows - 2; i >= 0; i--) {
    for (let j = cols - 2; j >= 0; j--) {
      dp[i][j] = dp[i + 1][j] + dp[i][j+1];
    }
  }

  return dp[0][0];
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
    [[7,3],28],
    [[3,2],3],
    [[1,1],1],
    [[10,10],48620],
    [[50,50],50],
  ];

  testRunner(tests, uniquePaths);
};

export default test();
