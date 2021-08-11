/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows === 1) return s
  const len = Math.min(s.length,numRows)
  let rows = []
  let rowIndex = 0
  let rowFlag = false
  for(let i=0;i<s.length;i++) {
    rows[rowIndex] = rows[rowIndex]?rows[rowIndex]+=s[i]:s[i]
    if(rowIndex===0||rowIndex===numRows-1) {
      rowFlag = !rowFlag
    }
    rowIndex += rowFlag?1:-1
  }
  return rows.join('')
};
// @lc code=end

