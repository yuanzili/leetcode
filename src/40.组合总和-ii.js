/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a,b) => a-b)
  const result = []
  const dfs = (target,itemArr,index) =>  {
    if(target<0) {
      return 
    }
    if(target === 0) {
      result.push(itemArr)
      return 
    }
    for(let i=index;i<candidates.length;i++) {
      if(i!==index&& candidates[i]===candidates[i-1]) continue
      if(target-candidates[i]>=0) {
        dfs(target-candidates[i],[...itemArr,candidates[i]],i+1)
      }
    }
  }
  dfs(target,[],0)
  return result
};
// @lc code=end

