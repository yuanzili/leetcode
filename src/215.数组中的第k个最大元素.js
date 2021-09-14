/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   //从大到小排序
//   // return nums.sort((a, b) => b - a)[k - 1];
//   const quickSort = (nums, left, right, k) => {
//     // if (left >= right) return;
//     const index = part(nums, left, right);
//     if (k === index) {
//       return nums[index];
//     } else {
//       return index < k
//         ? quickSort(nums, index + 1, right, k)
//         : quickSort(nums, left, index - 1, k);
//     }

//     // return nums;
//   };
//   const part = (nums, left, right) => {
//     let leftIndex = left;
//     let temp = right;
//     for (let i = left; i < right; i++) {
//       if (nums[i] > nums[temp]) {
//         //如果当前数字比目标大，移动到标记位置
//         [nums[i], nums[leftIndex]] = [nums[leftIndex], nums[i]];
//         leftIndex++;
//       }
//     }
//     //临时值位置互换
//     [nums[leftIndex], nums[temp]] = [nums[temp], nums[leftIndex]];
//     return leftIndex;
//   };

//   return quickSort(nums, 0, nums.length - 1, k - 1);
// };

var findKthLargest = function (nums, k) {
  // if (nums.length === 1) return nums[0];
  let heapSize = nums.length;
  function buildHeap(nums, heapSize) {
    //从最后一个非叶节点开始遍历
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      maxHeap(nums, i, heapSize);
    }
  }
  function maxHeap(nums, i, heapSize) {
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    let maxI = i;
    if (l < heapSize && nums[l] > nums[maxI]) {
      maxI = l;
    }
    if (r < heapSize && nums[r] > nums[maxI]) {
      maxI = r;
    }
    if (maxI !== i) {
      //做了交换
      [nums[maxI], nums[i]] = [nums[i], nums[maxI]];
      //重新遍历交换的点
      maxHeap(nums, maxI, heapSize);
    }
  }
  //先获取一个大顶堆
  buildHeap(nums, heapSize);
  //遍历k-1次获取堆顶
  while (k - 1 > 0) {
    [nums[0], nums[heapSize - 1]] = [nums[heapSize - 1], nums[0]];
    --heapSize;
    k--;
    //互换
    maxHeap(nums, 0, heapSize);
  }
  return nums[0];
};
// @lc code=end
