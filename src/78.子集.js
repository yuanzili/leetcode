/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result  = [] 
  const dfs = (target,index) => {
    if(target === nums.length) {
      result.push(target)
      return 
    }
    result.push(target)
    for(let i=index;i<nums.length;i++) {
      dfs([...target,nums[i]],i+1)
    }
  }
  dfs([],0)
  return result 
};
// @lc code=end

