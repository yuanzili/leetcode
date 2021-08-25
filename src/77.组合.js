/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function(n, k) {
//   const result = []
//   const numList = new Array(n).fill(0).map((item,index) => index+1)
//   const dfs = (target,nums) => {
//     if(target.length === k) {
//       result.push(target)
//       return 
//     }
//    for(let i=0;i<nums.length;i++) {
//      if(target.length===0 || (target[target.length-1]&&nums[i]>target[target.length-1])) {
//        dfs([...target,nums[i]],nums.filter(e => e!==nums[i]))
//      }
//    }
//   }
//   dfs([],numList)
//   return result
// };

var combine = function(n, k) { 
  const result = []
  const dfs = (target,index) => {
    if(target.length === k) {
      result.push(target)
      return
    }
    for(let i=index;i<=n;i++) {
      dfs([...target,i],i+1)
    }
  }
  dfs([],1)
  return result
}
// @lc code=end

