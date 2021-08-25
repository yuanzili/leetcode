/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   let maxPrices = 0 
//   const dfs = (buyPrice,totalPrice,day,saleFlag) => {
//     if(day === prices.length) {
//       if(!saleFlag) {
//        maxPrices = Math.max(maxPrices,totalPrice + prices[day-1]-buyPrice) 
//       }
//       maxPrices = Math.max(maxPrices,totalPrice) 
//       return 
//     }
//     if(!saleFlag) {//买了
//       const curPrice = prices[day-1]
//       //卖掉
//       dfs(0,totalPrice+curPrice-buyPrice,day+1,true)
//       //留着
//       dfs(buyPrice,totalPrice,day+1,false)
//     }else {//没买
//       //买今天的
//       const curPrice = prices[day-1]
//       dfs(curPrice,totalPrice,day+1,false)
//       //不买
//       dfs(0,totalPrice,day+1,true)
//     }
//   }

//   dfs(0,0,1,true)
//   return maxPrices
// };
var maxProfit = function(prices) { 
  const dp = new Array(prices.length).fill(0).map(v => new Array(2).fill(0));
    dp[0][0] = 0
    dp[0][1] = - prices[0]
    for(let i=1;i<prices.length;i++) {
      dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
      dp[i][1] = Math.max(dp[i-1][0]-prices[i],dp[i-1][1])
    }
    return  dp[prices.length-1][0]
}
// @lc code=end

