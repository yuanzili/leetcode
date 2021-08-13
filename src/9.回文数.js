/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0||(!(x%10) && x)) return false
  let s = x+''
  const xArr =  s.split('')
  const reverse = xArr.reverse()
  const reverseStr = reverse.join('')
  return s === reverseStr
};
// @lc code=end

