'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  return 0;
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
    [[1, 2, 3, 3, 4, 5], 3],
    [[2, 2, 2, 2], 2],
    [[3, 1, 4, 2, 5, 2], 2],
    [[1, 3, 4, 2, 2], 2],
    [[3, 1, 3, 4, 2], 3],
  ];

  testRunner(tests, findDuplicate);
};

export default test();
