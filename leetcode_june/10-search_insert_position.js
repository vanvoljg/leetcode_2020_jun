/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  if (nums.length == 0) return 0;
  let l = 0;
  let r = nums.length - 1;
  let mid;
  while (l <= r) {
    mid = l + ((r - l) >> 1); // Integer division by 2
    if (nums[mid] == target) return mid;
    if (nums[mid] > target) r = mid - 1;
    else l = mid + 1;
  }

  return nums[mid] < target ? mid + 1 : mid;
};
