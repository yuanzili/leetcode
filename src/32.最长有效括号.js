/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if(!s) return 0
  const stack = []
  let maxLen = 0
  stack.push(-1)
  for(let i=0;i<s.length;i++) {
    const c = s.charAt(i)
    if(c === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if(stack.length>0) {
        maxLen = Math.max(i-stack[stack.length-1],maxLen)
      }else {
        stack.push(i)
      }
    }
  }
  return maxLen
};
// @lc code=end

