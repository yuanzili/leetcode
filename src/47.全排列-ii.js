/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permuteUnique = function(nums) {
//   nums.sort((a,b) => a-b)
//   const result = []
//   const set = new Set()
//   const dfs = (itemArr,set,index) => {
//     if(itemArr.length === nums.length) {
//       result.push(itemArr)
//       return 
//     }
//     for(let i=0;i<nums.length;i++) {
//       if(i!==0 && nums[i] === nums[i-1] && !set.has(i-1)) continue
//       const key=i
//       if(set.has(key)) continue
//       set.add(key)
//       dfs([...itemArr,nums[i]],set,index+1)
//       set.delete(key)
//     }
//   }
//   dfs([],set,0)
//   return result
// };

var permuteUnique = function(nums) {
  nums.sort((a,b) => a-b)
  const result = []
  const dfs = (arrItem,remaining)=> {
    if(arrItem.length === nums.length) {
      result.push(arrItem)
      return 
    }
    for(let i=0;i<remaining.length;i++) {
      if(i>0 && remaining[i] === remaining[i-1]) continue
      dfs([...arrItem,remaining[i]],[...remaining.slice(0,i),...remaining.slice(i+1)])
    }
  }
  dfs([],nums)
  return result
}
// @lc code=end

