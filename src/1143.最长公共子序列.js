/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let length1 = text1.length;
  let length2 = text2.length;
  const dp = new Array(length1 + 1)
    .fill(0)
    .map((item) => new Array(length2 + 1).fill(0));
  for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[length1][length2];
};
// @lc code=end
