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
// var climbStairs = function (n) {
//   let result = 0;
//   let tem = 0;
//   let cur = 1;
//   for (let i = 0; i <= n; i++) {
//     temp = result;
//     result = result + cur;
//     cur = temp;
//   }
//   return result;
// };
// var climbStairs = function (n) {
//   //dp[i] = dp[i-1] + dp[i-2]
//   const dp = new Array(n);
//   dp[0] = 1;
//   dp[1] = 2;
//   for (let i = 2; i < n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n - 1];
// };

var climbStairs = function (n) {
  let temp = 0;
  let cur = 1;
  let result = 1;
  for (let i = 1; i < n; i++) {
    temp = result;
    result = result + cur;
    cur = temp;
  }
  return result;
};
// @lc code=end
