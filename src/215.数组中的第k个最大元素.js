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
var findKthLargest = function (nums, k) {
  //从大到小排序
  // return nums.sort((a, b) => b - a)[k - 1];
  const quickSort = (nums, left, right, k) => {
    // if (left >= right) return;
    const index = part(nums, left, right);
    if (k === index) {
      return nums[index];
    } else {
      return index < k
        ? quickSort(nums, index + 1, right, k)
        : quickSort(nums, left, index - 1, k);
    }

    // return nums;
  };
  const part = (nums, left, right) => {
    let leftIndex = left;
    let temp = right;
    for (let i = left; i < right; i++) {
      if (nums[i] > nums[temp]) {
        //如果当前数字比目标大，移动到标记位置
        [nums[i], nums[leftIndex]] = [nums[leftIndex], nums[i]];
        leftIndex++;
      }
    }
    //临时值位置互换
    [nums[leftIndex], nums[temp]] = [nums[temp], nums[leftIndex]];
    return leftIndex;
  };

  return quickSort(nums, 0, nums.length - 1, k - 1);
};
// @lc code=end
