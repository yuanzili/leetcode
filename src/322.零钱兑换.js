/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {

//   const dp = new Array(amount+1).fill(Infinity)
//   dp[0]= [0]
//   for(let i=1;i<=amount;i++) {
//     for(let j=0;j<coins.length;j++) {
//       if(i>=coins[j]) {
//         dp[i] = Math.min(dp[i],dp[i-coins[j]]+1)
//       }
//     }
//   }
//   return dp[amount] === Infinity?-1:dp[amount]
// };
var coinChange = function(coins, amount) { 
  //求最小硬币个数
  //面额为i最小硬币数 = i-4的最小硬币数+面额为4的硬币
  const dp = new Array(amount+1).fill(Infinity)
  dp[0] = [0]
  for(let i=1;i<=amount;i++) {
    for(let j=0;j<coins.length;j++) {
      if(i>=coins[j]) {
        dp[i] = Math.min(dp[i],dp[i-coins[j]]+1)
    }
  }
}
  return dp[amount] === Infinity?-1:dp[amount]
}


// @lc code=end

