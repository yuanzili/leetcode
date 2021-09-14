/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function (nums) {
//   // nums[i] >nums[j]  dp[i] = dp[j] +1
//   const dp = new Array(nums.length);
//   dp[0] = 1;
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     dp[i] = 1;
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     max = Math.max(max, dp[i]);
//   }
//   return max;
// };

var lengthOfLIS = function (nums) {
  let len = 1;
  let d = new Array(nums.length + 1);
  d[len] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > d[len]) {
      d[++len] = nums[i];
    } else {
      //如果比d数组最后一个小
      //通过二分法查出nums[i]可以存在的位置
      let left = 1;
      let right = len;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[i] > d[mid]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      d[left] = nums[i];
    }
  }
  return len;
};
// @lc code=end
