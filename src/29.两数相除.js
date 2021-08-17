/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if(divisor === 0) return 0
  if(dividend === 0) return 0
  if(divisor === 1) return dividend
  if(dividend === Math.pow(-2,31) && divisor === -1) return Math.pow(2,31)-1

  let sign = (dividend>0!==divisor>0)?-1:1
  
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)


  let res = 0,
      base = divisor,
      count = 1
   while(dividend>=divisor)  {
    base = divisor,
    count = 1
     while(base <= (dividend >> 1)) {
      base = base <<1 
      count = count << 1
    }
    res += count
    dividend -= base
   }
   return sign===1?res:-res
};
// @lc code=end

