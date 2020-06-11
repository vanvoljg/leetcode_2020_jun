/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  if (nums.length < 2) return;
  let idxR = 0;
  let idxB = nums.length - 1;
  let i = 0;

  while (i <= idxB) {
    switch (nums[i]) {
      case 0:
        i != idxR && arraySwap(nums, i, idxR);
        idxR++;
      case 1:
        i++;
        break;
      case 2:
        arraySwap(nums, i, idxB);
        idxB--;
        break;
      default:
        console.log('Found invalid array element');
        return;
    }
  }
  return;
};

const arraySwap = (arr, l, r) => {
  const tmp = arr[l];
  arr[l] = arr[r];
  arr[r] = tmp;
  return;
};

const run = () => {
  // let arr = randArr(100);
  let arr = [ 1, 0, 1, 2, 0, 0, 1, 0, 2, 0, 0, 1, 1, 0, 0, 2, 2, 1, 0, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 2, 2, 2, 0, 0, 2, 2, 2, 2, 1, 0, 1, 0, 1, 2, 2, 0, 2, 1, 0, 1, 0, 1, 2, 1, 1, 0, 0, 2, 2, 0, 0, 1, 2, 2, 1, 0, 1, 0, 0, 2, 2, 2, 0, 0, 0, 2, 1, 1, 1, ];

  console.log('Before:', { arr });
  sortColors(arr);
  console.log('After:', { arr });
};

const randArr = (n) => {
  let ret = new Array(n);
  for (let i = 0; i < ret.length; i++) {
    ret[i] = Math.floor(Math.random() * 3);
  }
  return ret;
};

run();
