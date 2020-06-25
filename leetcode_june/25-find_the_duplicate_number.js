'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  // Will never access out of range: max value <= max index because # ele >= max value + 1
  let i = 0;
  let j = nums[nums[0]];
  while (nums[i] != [j]) {
    i = nums[i];
    j = nums[nums[j]];
  };
  i = 0;
  while (nums[i] != nums[j]) {
    i = nums[i];
    j = nums[j];
  }
  return nums[i];
}

function testRunner(tests, func) {
  const name = func.name;
  for (const [input, expected] of tests) {
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

const test = () => {
  const tests = [
    [[1, 2, 3, 3, 4, 5], 3],
    [[2, 2, 2, 2], 2],
    [[3, 1, 4, 2, 5, 2], 2],
    [[1, 3, 4, 2, 2], 2],
    [[3, 1, 3, 4, 2], 3],
    [[6, 2, 4, 1, 3, 2, 5, 2], 2],
  ];

  testRunner(tests, findDuplicate);
};

export default test();
