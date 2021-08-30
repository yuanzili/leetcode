/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length-1
  while(left<=right) {
    const mid = Math.floor((left +right)/2)
    if(nums[mid] === target ||nums[left]===target ||nums[right] === target) return true
    if (nums[mid] == nums[right]) right--;
   else if(nums[left] <= nums[mid]) {
      if(target>=nums[left] && target <= nums[mid]) {
        right = mid-1
      } else {
        left = mid +1
      }
    } else {
      if(target<=nums[left] && target >= nums[mid]) {
        left = mid +1
      }else {
        right = mid -1
      }
    }

  }
  return false
};
// @lc code=end

