/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const order= []
 const rows = matrix.length
 const columns = matrix[0].length
 let left = 0,top=0,right=columns-1,bottom=rows-1
 while(left<=right && top<=bottom) {
   for(let column=left;column<=right;column++) {
    order.push(matrix[top][column])
   }
   for(let row=top+1;row<=bottom;row++) {
    order.push(matrix[row][right])
   }
   if (left < right && top < bottom) {
    for(let column=right-1;column>left;column--) {
      order.push(matrix[bottom][column])
    }
    for(let row=bottom;row>top;row--) {
      order.push(matrix[row][left])
   } 
  }
   [left,top,right,bottom] = [left+1,top+1,right-1,bottom-1]
  }
  return order
};
// @lc code=end

