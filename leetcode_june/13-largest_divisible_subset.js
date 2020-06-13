/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = (nums) => {

};

const run = () => {
  let in0 = [1,2,3];
  let in1 = [1,2,4,8];

  console.log({
    in0,
    out0: largestDivisibleSubset(in0),
    in1,
    out1: largestDivisibleSubset(in1),
  });
};

run();
