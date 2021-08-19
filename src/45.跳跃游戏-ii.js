/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let current = 0
  let step = 0 
  let next = 0
  for(let i=0;i<nums.length-1;i++) {
    next = Math.max(nums[i]+i,next) 
    if(i === current) {
      current = next
      step++
    }
  }
  return step
};
// @lc code=end

