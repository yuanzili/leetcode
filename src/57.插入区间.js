/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

  intervals.push(newInterval)
  intervals.sort((a,b) => a[0]-b[0])
  const result = [intervals[0]]
 for(let i=0;i<intervals.length;i++) {
   const target = result[result.length -1]
   if(intervals[i][0] <= target[1]) {
     let max = Math.max(target[1],intervals[i][1])
     result[result.length -1] = [target[0],max]
   }else {
     result.push(intervals[i])
   }
 }
   return result
};
// @lc code=end

