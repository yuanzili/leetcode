/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []
  if(nums.length<3) return result
  nums = nums.sort((a,b) => a-b)
  for(let i=0;i<nums.length;i++) {
    const cur = nums[i]
    if(cur > 0) break
    if(i > 0 && nums[i] == nums[i-1]) continue
    let leftIndex = i+1
    let rightIndex = nums.length-1
    while(leftIndex<rightIndex) {
      const sum = cur+nums[leftIndex]+nums[rightIndex]
      if(sum===0) {
        result.push([cur,nums[leftIndex],nums[rightIndex]])
        while(leftIndex<rightIndex && nums[leftIndex]===nums[leftIndex+1]) leftIndex++
        while(leftIndex<rightIndex && nums[rightIndex]===nums[rightIndex-1]) rightIndex--
        leftIndex++
        rightIndex-- 
      }else if(sum<0) {
        leftIndex++
      }else if(sum>0) {
        rightIndex--
      }
    }
  }

  return result
};
// @lc code=end

