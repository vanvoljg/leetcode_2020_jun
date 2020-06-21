/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = function(dungeon) {
  
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
    [[[-2,-3,3],[-5,-10,1],[10,30,-5]], 7],
  ];

  testRunner(tests, calculateMinimumHP);
};

test();
