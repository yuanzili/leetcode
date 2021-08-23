/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let cur= 0
  for(let i=digits.length-1;i>=0;i--) {
    let sum = digits[i] + cur 
    if(i===digits.length-1) {
      sum +=1
    }
    digits[i] = sum % 10
    if(sum>=10) {
      cur = 1
    }else {
      cur = 0
    }
  }
  if(cur) digits.unshift(1)
  return digits
};
// @lc code=end

