/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   let max = Math.pow(-2,31) 
 
//   for(let i=0;i<nums.length;i++) {
//     let left = i
//     let right = i
//     let sum = 0
//     while(left <= right && right<nums.length) {
//       sum+= nums[right]
//       max = Math.max(max,sum)
//       right++
//     }
//   }
//   return max
// };
var maxSubArray = function(nums) {
  let pre = 0
  let max = Math.pow(-2,31)

  for(let i=0;i<nums.length;i++) {
    pre = Math.max(pre+nums[i],nums[i])
    max = Math.max(pre,max)
  }

  return max

  
 }
// @lc code=end

