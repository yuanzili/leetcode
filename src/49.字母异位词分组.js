/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const obj = {}
  const result = []
  strs.forEach(str => {
    const key =  str.split('').sort().join('')
    if(obj[key]) {
      obj[key].push(str)
    } else {
      obj[key] = [str]
    }
  })
  Object.keys(obj).forEach(key => result.push(obj[key]))
  return result
};
// @lc code=end

