/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(target <= nums[0]) return 0
  let left = 0 
  let right = nums.length -1
 while(left<=right) {
   const mid = (left+right)>>1
   if(nums[mid] === target) return mid
   if(nums[mid] > target) {
     //在左侧
     right = mid -1
   } else {
     left = mid +1
   }
 }
 return left  
};
// @lc code=end

