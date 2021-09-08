/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  //dp[k] = dp[k-2] + nums[k]
  for (let k = 2; k < nums.length; k++) {
    dp[k] = Math.max(dp[k - 2] + nums[k], dp[k - 1]);
  }
  return dp[nums.length - 1];
};
// @lc code=end
