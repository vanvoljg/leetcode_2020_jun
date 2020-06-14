/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = (nums) => {
  if (nums.length <= 1) return nums;

  nums.sort((a, b) => a - b);

  let table = new Array(nums.length);
  for (let i = 0; i < table.length; i++) {
    table[i] = 1;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] % nums[j] == 0 || nums[j] % nums[i]) {
        table[i] = table[j] + 1
      }
    }
  }

  console.log({table});
  return table;
};

const run = () => {
  let in0 = [1, 2, 3];
  let in1 = [1, 2, 4, 8];
  let in2 = [];
  let in3 = [5, 4, 2, 15, 10, 6, 12, 32, 44, 8];
  let in4 = [5, 2, 4, 3, 1];

  ({
    in0,
    out0: largestDivisibleSubset(in0),
    in1,
    out1: largestDivisibleSubset(in1),
    in2,
    out2: largestDivisibleSubset(in2),
    in3,
    out3: largestDivisibleSubset(in3),
    in4,
    out4: largestDivisibleSubset(in4),
  });
};

run();
