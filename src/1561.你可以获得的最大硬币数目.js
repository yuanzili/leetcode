/*
 * @lc app=leetcode.cn id=1561 lang=javascript
 *
 * [1561] 你可以获得的最大硬币数目
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  piles.sort((a,b) => a-b)
  let left = 0 
  let right = piles.length-1
  let max = 0
  while(left<right) {
    //Alice
    right--
    if(left <right) {
      max += piles[right]
      right--
    }
    left++
  }
  return max
};
// @lc code=end

