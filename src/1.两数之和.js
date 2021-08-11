/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()
  for(let i=0;i<nums.length;i++) {
    let second = target - nums[i]
    if(map.has(second)) {
      return [map.get(second),i]
    }else {
      map.set(nums[i],i)
    }
  }
  return []
};
// @lc code=end

