/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let idxR = 0;
  let idxW = 0;
  let idxB = nums.length;
  let i = 0;

  while (i < idxB) {
    if (nums[i] == 0) {
      if (i != idxR) arraySwap(nums, i, idxR);
      idxR++;
      i++;
    } else if (nums[i] == 2) {
      arraySwap(nums, i, idxB - 1);
      idxB--;
    } else if (nums[i] ==1 ) {
      i++;
    } else {
      console.log('Found invalid array element');
    }
  }
  return;
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
