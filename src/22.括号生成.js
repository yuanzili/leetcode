/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {
//   const res = [];
//   const dfs = (leftNum, rightNum, str) => {
//     if (str.length === 2 * n) {
//       res.push(str);
//       return;
//     }
//     if (leftNum > 0) {
//       dfs(leftNum - 1, rightNum, str + "(");
//     }
//     if (rightNum > leftNum) {
//       dfs(leftNum, rightNum - 1, str + ")");
//     }
//   };
//   dfs(n, n, "");
//   return res;
// };
// @lc code=end
