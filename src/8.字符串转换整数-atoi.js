/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
   return Math.min(Math.max(Math.pow(-2,31),parseInt(s)||0),Math.pow(2,31)-1)
};
// @lc code=end

