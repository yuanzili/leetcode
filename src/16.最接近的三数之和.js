/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a,b) => a-b)
  let distance = Infinity
  if(nums[0]*3 > target) {
   return  distance = nums[0]+nums[1]+nums[2]
  }
  for(let i=0;i<nums.length;i++) {
    let l = i+1
    let r = nums.length-1
    while(l<r) {
      const sum = nums[i] + nums[l] + nums[r]
      const diff = sum - target
      if(Math.abs(diff) < Math.abs(distance-target)) {
        distance = sum
      }
      if(sum>target) {
        r--
      }else {
        l++
      }
    }
  }
 return distance
};


// @lc code=end

