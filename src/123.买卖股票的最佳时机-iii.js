/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   let maxPrices = 0 
//   const dfs = (buyPrice,totalPrice,day,saleFlag,time) => {
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
//       dfs(0,totalPrice+curPrice-buyPrice,day+1,true,time)
//       //留着
//       dfs(buyPrice,totalPrice,day+1,false,time)
//     }else {//没买
//       //买今天的
//       const curPrice = prices[day-1]
//       if(time>0) {
//         dfs(curPrice,totalPrice,day+1,false,time-1)
//       }
//       //不买
//       dfs(0,totalPrice,day+1,true,time)
//     }
//   }

//   dfs(0,0,1,true,2)
//   return maxPrices
// };
var maxProfit = function(prices) {
   let buy1 = -prices[0]
   let buy2 = -prices[0]
   let sell1 = 0
   let sell2 = 0
   for(let i=1;i<prices.length;i++) {
    buy1 = Math.max(buy1,-prices[i])
    sell1 = Math.max(sell1,buy1+prices[i])
    buy2 = Math.max(buy2,sell1-prices[i])
    sell2 = Math.max(sell2,buy2+prices[i])
   }
   return sell2
 }
// @lc code=end

