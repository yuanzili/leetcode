/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let rows = board.length
  let columns = board[0].length
  let result = false
  const visited = new Array(rows).fill(0).map(e => new Array(columns).fill(false))
  const  getExist = (i,j,wordIndx) => {
    if(wordIndx === word.length) {
      result = true
      return 
    }
    if(i-1>=0 && !visited[i-1][j] &&board[i-1][j] === word.charAt(wordIndx)) {
      visited[i-1][j] = true
      getExist(i-1,j,wordIndx+1)
    }
    if(i+1<rows && !visited[i+1][j] &&board[i+1][j] === word.charAt(wordIndx)) {
      visited[i+1][j]= true
      getExist(i+1,j,wordIndx+1)
    }
    if(j-1>=0 && !visited[i][j-1] && board[i][j-1] === word.charAt(wordIndx)) {
      visited[i][j-1] = true
      getExist(i,j-1,wordIndx+1)
    }
    if(j+1<columns && !visited[i][j+1] && board[i][j+1] === word.charAt(wordIndx)) {
      visited[i][j+1] = true
      getExist(i,j+1,wordIndx+1)
    }
    visited[i][j] = false
    return
  }
  for(let i=0;i<rows;i++) {
    for(let j=0;j<columns;j++) {
      if(board[i][j] === word.charAt(0)) {
        visited[i][j] = true
        getExist(i,j,1)
      }
    }
  }
 return result
};
// @lc code=end

