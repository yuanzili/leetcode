/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let index = -1
  for(let i=0;i<matrix.length;i++) {
    if(matrix[i][matrix[0].length-1]>target) {
       index = i
      break
    }else if(matrix[i][matrix[0].length-1] === target) {
      return true
    }
  }
  if(index>-1) {
    const targetIndex = matrix[index].findIndex(e => target === e)
    return targetIndex>-1
  }
  return false
};
// @lc code=end

