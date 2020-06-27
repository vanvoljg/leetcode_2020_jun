'use strict';

/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  
};

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
    [12, 3],
    [13, 2],
    [143, 4],
  ];

  testRunner(tests, numSquares);
}

export default test();
