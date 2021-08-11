/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(!s || s.length === 0) return ''
  let result = s[0]
  let dp = []
  for(let i=s.length-1;i>=0;i--) {
    dp[i] = []
    for(let j=i;j<s.length;j++) {
      if(i===j)  dp[i][j] = true
      else if(j-i===1 && s[j] ===s[i])  dp[i][j] = true
      else if( s[j] ===s[i] && dp[i+1][j-1]) dp[i][j] = true

      if(dp[i][j]&& j-i+1>=result.length) {
        result = s.slice(i,j+1)
      }
    }
  }
  return result
};
// @lc code=end

