/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//   //二分法
//   let left = 0 
//   let right = nums.length -1
//   if(left === right) return 0
//   while(left<right) {
//     const mid = (left+right) >> 1
//     if(nums[mid] === target) return mid
//     if(nums[left]<nums[mid]) {
//       //左侧升序
//       if(nums[left]<=target &&  target <= nums[mid]) {
//         //在左侧内部
//         right = mid-1
//       }else {
//         //在右侧
//         left = mid+1
//       }
//     }else {
//       //右侧升序
//       if(nums[mid]<=target &&  target <= nums[right]) { 
//         //在右侧内部
//         left = mid+1
//       }else {
//         //在左侧内部
//         right= mid-1
//       }
//     }
//   }
//   return nums[left+1] === target? left+1 :-1
// };

const search = (nums, target) => {
  let [left, right] = [0, nums.length - 1];
  while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] === target) return mid;
      if(nums[left] === target) return left
      if(nums[right] === target) return right
      if (nums[left] < nums[mid]) {
          // 左边是升序的
          if (nums[left] < target && target < nums[mid]) {
              // target在升序的里面
              right = mid - 1;
          } else {
              // target不在升序的里面
              left = mid + 1;
          }
      } else {
          // 右边升序
          if (nums[mid] < target && target < nums[right]) {
              // target在升序的里面
              left = mid + 1;
          } else {
              // target不在升序的里面
              right = mid - 1;
          }
      }
  }
  return  -1;
};
// @lc code=end

