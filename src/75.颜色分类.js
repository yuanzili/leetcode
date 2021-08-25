/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  if(nums.length === 1) return 
  let p0 = 0
  let p1 = 0
  for(let i=0;i<nums.length;i++) {
   if(nums[i] === 1) {
     [nums[i],nums[p1]] = [nums[p1],nums[i]]
     p1++
   }else if(nums[i] === 0) {
    [nums[i],nums[p0]] = [nums[p0],nums[i]]
    if(p0<p1) {
      [nums[i],nums[p1]] = [nums[p1],nums[i]] 
    }
    p0++
    p1++
   }
  }
};
// @lc code=end

