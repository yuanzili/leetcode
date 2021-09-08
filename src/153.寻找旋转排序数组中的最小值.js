/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[left] > nums[mid]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid;
    } else if (nums[mid] < nums[right]) {
      return nums[left];
    }
    if (right - left === 1) {
      return nums[left] > nums[right] ? nums[right] : nums[left];
    }
  }
  return nums[left];
};

// var findMin = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] < nums[right]) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return nums[left];
// };
// @lc code=end
