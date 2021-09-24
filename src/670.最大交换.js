/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const numStrArr = num.toString().split("");
  let numArr = [...numStrArr];
  numArr.sort((a, b) => b - a);
  for (let i = 0; i < numStrArr.length; i++) {
    if (numStrArr[i] !== numArr[i]) {
      let reverseArr = [...numStrArr].reverse();
      const index = reverseArr.indexOf(numArr[i]);
      numStrArr[numStrArr.length - index - 1] = numStrArr[i];
      numStrArr[i] = numArr[i];
      break;
    }
  }
  return Number(numStrArr.join(""));
};
// @lc code=end
