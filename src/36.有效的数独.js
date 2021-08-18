/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = new Array(9).fill().map(_=> new Set())
  const columns = new Array(9).fill().map(_=> new Set())
  const box = new Array(9).fill().map(_=> new Set())
  for (let i = 0; i <9; i++) {
    for (let j = 0; j < 9; j++) {
      if(board[i][j] !== '.') {
        const item = board[i][j]
        const boxId = (i/3|0)*3 + (j/3|0)
        if(box[boxId].has(item)) return false
        box[boxId].add(item)
        if(rows[i].has(item)) return false
        rows[i].add(item)
        if(columns[j].has(item)) return false
        columns[j].add(item)
      }
      
    }
    
  }
  return true
};
// @lc code=end

