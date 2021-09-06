/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let result = []
  let other = []
  const map = new Map()

  arr1.forEach(num => {
    if(map.has(num)) {
      map.set(num,map.get(num)+1)
    }else {
      map.set(num,1)
    }
  })
  arr2.forEach(num => {
    result = result.concat(new Array(map.get(num)).fill(num))
    map.delete(num)
  })
  Array.from(map.keys()).sort((a,b) => a-b).forEach(key => {

    result = result.concat(new Array(map.get(key)).fill(key))
  }
  )
  return result

};
// @lc code=end

