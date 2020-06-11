/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let idxR = 0;
  let idxW = 0;
  let idxB = nums.length;
  let i = 0;

};

const arraySwap = (arr, l, r) => {
  const tmp = arr[l];
  arr[l] = arr[r];
  arr[r] = tmp;
  return;
}

const run = () => {
  let arr = [2,0,2,1,1,0];

  console.log("Before:", {arr});
  sortColors(arr);
  console.log("After:", {arr});
};

run();
