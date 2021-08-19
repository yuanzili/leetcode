/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  const dfs = (target,resultItemArr,idx) => {
    //数组中的数取完了
    if(idx === candidates.length) return 
    //找到结果，退出当前分支
    if(target === 0 ) {
      result.push(resultItemArr)
      return;
    }
    //直接跳过，下一个
    dfs(target,resultItemArr,idx+1)
    //使用当前
    if(target - candidates[idx] >= 0) {
      dfs(target - candidates[idx],[ candidates[idx],...resultItemArr],idx)
    }
  }
  dfs(target,[],0)
  return result
};
// @lc code=end

