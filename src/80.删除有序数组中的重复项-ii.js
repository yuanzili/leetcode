/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index =  0
 for (let i = 0; i < nums.length; i++) {
   if(nums[i]!==nums[i+2]) {
    nums[index] = nums[i]
     index++
    }
  }
  return index
};
// @lc code=end

