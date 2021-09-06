/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let left = 0 
  let right = nums.length -1
  while(left<=right) {
    const mid = Math.floor((left + right)/2)
    if(target === nums[left]) return left
    if(target === nums[right]) return right
    if(target  === nums[mid]) return mid
    if(target > nums[mid]) {
      left = mid+1
    }else  if(target<nums[mid]) {
      right = mid -1
    }
  }
  return -1
};
// @lc code=end

