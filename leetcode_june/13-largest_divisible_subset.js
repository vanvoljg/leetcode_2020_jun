/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = (nums) => {
  if (nums.length <= 1) return nums;

  nums.sort((a, b) => a - b);
  let dp = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) dp[i] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] % nums[i] == 0) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }

  let max = dp.reduce(
    (acc, num, i) => {
      if (el > acc.max) {
        return { num, i };
      } else {
        return acc;
      }
    },
    {
      num: Number.MIN_SAFE_INTEGER,
      i: 0,
    }
  );

  let ret = [];
  let j = 1;
  for (let i = 0; i <= max.i; i++) {
    if (dp[i] == j && nums[max.i] % nums[i] == 0) {
      ret.push(nums[i]);
      j++;
    }
  }

  return ret;
};

const run = () => {
  let in0 = [1, 2, 3];
  let in1 = [1, 2, 4, 8];
  let in2 = [];
  let in3 = [5, 4, 2, 15, 10, 6, 12, 32, 44, 8];
  let in4 = [5, 2, 4, 3, 1];

  console.log({
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
