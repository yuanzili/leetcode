/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if(nums.length<2) return nums
  const quickSort =  (nums,left,right) =>  {
    if(left>=right) return
    const index = part(nums,left,right)
    quickSort(nums,left,index-1)
    quickSort(nums,index+1,right)
    return nums
  }
  const part = (nums,left,right) => {
    //要对比的值
    const temp = right
    let leftIndex = left
    for(let i=left;i<right;i++) {
      if(nums[i]<nums[temp]) {
        //互换位置
        [nums[i],nums[leftIndex]] = [nums[leftIndex],nums[i]]
        leftIndex++
      }
    }
    //
    [nums[leftIndex],nums[temp]] = [nums[temp],nums[leftIndex]]
    return leftIndex
  }
  const a = quickSort(nums,0,nums.length-1)
  return a 
};
// @lc code=end

