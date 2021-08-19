/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums.length === 1 )return true
  let current = 0
  let next = 0
 for(let i=0;i<nums.length-1;i++) {
  next = Math.max(nums[i]+i,next)
  if(i === current) {
    current = next
  }
    if(current>=nums.length-1) return true
 }
 return false 
};
// @lc code=end

