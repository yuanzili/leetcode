/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  let partSum = 0;
  if (sum % 3) {
    return false;
  } else {
    partSum = sum / 3;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    partSum -= arr[i];
    if (partSum === 0) {
      count++;
      partSum = sum / 3;
    }
  }
  return count > 2;
};
// @lc code=end
