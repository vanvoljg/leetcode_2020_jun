/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = (nums) => {
  if (nums.length <= 1) return nums;

  let ret = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const retLen = ret.length;
    for (j = 0; j < retLen; j++) {
      if (nums[i] % ret[j] != 0 && ret[j] % nums[i] != 0) {
        ret.splice(j, 1);
      } else {
        if (ret[ret.length - 1] != nums[i]) {
          ret.push(nums[i]);
        }
      }
    }
  }

  return ret;
};

const run = () => {
  let in0 = [1, 2, 3];
  let in1 = [1, 2, 4, 8];
  let in2 = [];
  let in3 = [5, 2, 10, 15, 4, 8, 32, 44];

  console.log({
    in0,
    out0: largestDivisibleSubset(in0),
    in1,
    out1: largestDivisibleSubset(in1),
    in2,
    out2: largestDivisibleSubset(in2),
    in3,
    out3: largestDivisibleSubset(in3),
  });
};

run();
