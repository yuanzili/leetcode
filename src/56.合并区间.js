/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b) => {
    return a[0]-b[0]
  })
  const result = [intervals[0]]
  for(let i=0;i<intervals.length;i++) {
    const target = result[result.length -1]
    if(intervals[i][0]<=target[1]) {
      const max = Math.max(target[1],intervals[i][1])
      result[result.length -1] = [target[0],max]
    }else {
      result.push(intervals[i])
    }
  }
 return result
};
// @lc code=end

