/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const len = n*n
  const result = new Array(n).fill().map(item => new Array(n).fill(0))
  let left=0,top=0,right=n-1,bottom=n-1
  let num = 1
  while(left<=right && top<=bottom) {
    for(let column=left;column<=right;column++) {
      result[top][column] = num
      num++
    }
    for(let row=top+1;row<=bottom;row++) {
      result[row][right] = num
      num++
    }
    if(left<right && top<bottom) {
      for(let column=right-1;column>left;column--) {
        result[bottom][column] = num
        num++
      }
      for(let row=bottom;row>top;row--) {
        result[row][left] = num
        num++
      }
    }
    [left,top,right,bottom] = [left+1,top+1,right-1,bottom-1]
  }
  return result
}; 
// @lc code=end

