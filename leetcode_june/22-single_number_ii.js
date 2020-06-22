/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let map = new Map();
  nums.forEach((i) => {
    const cur_count = map.get(i);
    if (!cur_count) {
      map.set(i, 1);
    } else if (cur_count < 2) {
      map.set(i, cur_count + 1);
    } else {
      map.delete(i);
    }
  });
  let ret;
  for (let [single, _] of map) {
    ret = single;
  }
  return ret;
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
    [[2, 2, 3, 2], 3],
    [[0, 1, 0, 1, 0, 1, 99], 99],
  ];

  testRunner(tests, singleNumber);
};

test();
