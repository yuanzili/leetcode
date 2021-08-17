/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 0 
  for(let i=0;i<nums.length;i++) {
    if(i===0 || nums[i] !== nums[i-1]) {
      nums[count++] = nums[i]
      
    }
  }
  nums.splice(count,nums.length-count)
  return count 
};
// @lc code=end

