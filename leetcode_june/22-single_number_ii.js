/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  
};

const testRunner = (tests, func) => {
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
};

const test = () => {
  const tests = [
    [[2,2,3,2],3],
    [[0,1,0,1,0,1,99],99],
  ];

  testRunner(tests, singleNumber);
};

test();
