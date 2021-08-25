/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function(matrix) {
//   let row = new Array(matrix.length).fill(false)
//   let column = new Array(matrix[0].length).fill(false)
//   for(let i=0;i<matrix.length;i++) {
//     for(let j=0;j<matrix[0].length;j++) {
//     if(matrix[i][j] === 0) {
//       row[i] = true
//       column[j] = true
//     }
//     }
//   }
//   for(let i=0;i<matrix.length;i++) {
//     for(let j=0;j<matrix[0].length;j++) {
//       if(row[i] || column[j] ) {
//         matrix[i][j] = 0
//       }
//     }
//   }
// };
var setZeroes = function(matrix) {
  let r = matrix.length
  let c = matrix[0].length
  let flagCol0 = false
  for(let i=0;i<r;i++) {
    if(matrix[i][0] === 0) {
      flagCol0 = true
    }
    for(let j=1;j<c;j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }
  for(let i=r-1;i>=0;i--) {
    for(let j=1;j<c;j++) {
      if(matrix[i][0]===0 || matrix[0][j]===0) {
        matrix[i][j] = 0
      }
    }
    if(flagCol0) {
     matrix[i][0]  = 0    
    }
  }
}
// @lc code=end

