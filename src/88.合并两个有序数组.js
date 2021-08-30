/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m-1
  let p2 = n-1
  let index = nums1.length-1
  let temp;
  while(p1>-1 || p2>-1) {
    if(p1 === -1) {
      temp = nums2[p2]
      p2--
    }else if(p2 === -1) {
      temp = nums1[p1]
      p1--
    }else if(nums1[p1] > nums2[p2]) {
      temp = nums1[p1]
      p1--
    }else {
      temp = nums2[p2]
      p2--
    }
    nums1[index--] = temp
  }
}; 
// @lc code=end

