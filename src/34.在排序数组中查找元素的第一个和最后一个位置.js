/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(N, T) {
  const find = (target,nums,left=0,right=nums.length-1)=> {
    while(left<=right) {
      const mid = (left+right) >> 1
      if(nums[mid] > target) {
        //目标在左侧
        right = mid - 1
      }else {
        //target在mid上或者右侧
       left = mid + 1
      }
    }
    return right
  }
  let Tleft = find(T, N)
  if (N[Tleft] !== T) return [-1,-1]
  return [find(N[Tleft]-1,N,0,Tleft)+1,Tleft]
};
// @lc code=end

