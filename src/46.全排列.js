/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//   const result = [];
//   const set = new Set();
//   const dfs = (itemArr, set) => {
//     if (itemArr.length === nums.length) {
//       result.push(itemArr);
//       return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (set.has(nums[i])) continue;

//       set.add(nums[i]);
//       dfs([...itemArr, nums[i]], set);
//       set.delete(nums[i]);
//     }
//   };
//   dfs([], set);
//   return result;
// };
var permute = function (nums) {
  const result = [];
  const dfs = (item) => {
    if (item.length === nums.length) {
      result.push(item);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (item.indexOf(nums[i]) > -1) continue;
      dfs([...item, nums[i]]);
    }
  };
  dfs([]);
  return result;
};
// @lc code=end
