/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let result = 0 
  let tem = 0
  let cur = 1
  for(let i=0;i<=n;i++) {
    temp = result
    result = result +cur
    cur = temp
  }
  return result
};
// @lc code=end

