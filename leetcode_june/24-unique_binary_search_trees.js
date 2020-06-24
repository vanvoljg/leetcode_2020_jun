'use strict';

/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
  if (n < 2) return 1;
  let ret = 1;
  for (let i = 2; i <= n; i++) {
    ret = (ret * (n + i)) / i;
  }
  return ret;
}

function testRunner(tests, func) {
  const name = func.name;
  for (const [input, expected] of tests) {
    const result = func(input);
    console.log({
      name,
      input,
      expected,
      result,
      pass: result === expected,
    });
  }
}

const test = () => {
  const tests = [
    [1, 1],
    [2, 2],
    [3, 5],
    [4, 14],
    [5, 42],
    [6, 132],
  ];

  testRunner(tests, numTrees);
};

export default test();
