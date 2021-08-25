/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = ''
    const len = Math.max(a.length,b.length)
    let cur = 0
    for(let i=0;i<len;i++) {
      let c1 = i<a.length?a.charAt(a.length-i-1)-'0':0
      let c2 = i<b.length?b.charAt(b.length-i-1)-'0':0
      let sum =  c1+c2+cur
      result = sum%2 + result
      if(sum>1) {
        cur = 1
      }else {
        cur = 0
      }
    }
    if(cur) result= '1' + result
    return result
};
// @lc code=end

