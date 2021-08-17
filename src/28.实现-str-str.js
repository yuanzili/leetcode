/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(!needle || haystack === needle) return 0
  const needLen = needle.length
  for(let i=0;i<haystack.length-needLen+1;i++) {
    if(haystack.charAt(i) === needle.charAt(0)) {
      let flag = true
      for(let j=0;j<needLen;j++) {
        if(haystack.charAt(i+j) !== needle.charAt(j)) {
          flag = false
        }
      }
      if(flag) return i
    }
  }
  return -1
};
// @lc code=end

