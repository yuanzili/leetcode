/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {
//   const arr = s.split(" ").filter((str) => str !== "");
//   return arr.reverse().join(" ");
// };
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 字符串转数组
  const strArr = Array.from(s);
  // 移除多余空格
  removeExtraSpaces(strArr);
  // 翻转
  reverse(strArr, 0, strArr.length - 1);

  let start = 0;

  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === " " || i === strArr.length) {
      // 翻转单词
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }

  return strArr.join("");
};

// 删除多余空格
function removeExtraSpaces(strArr) {
  let fast = 0;
  let slow = 0;
  while (fast <= strArr.length) {
    if (strArr[fast] === " " && (fast === 0 || strArr[fast - 1] === " ")) {
      fast++;
    } else {
      strArr[slow++] = strArr[fast++];
    }
  }
  strArr.length = strArr[slow - 1] === " " ? slow - 1 : slow;
}

// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
  let left = start;
  let right = end;
  while (left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}
// @lc code=end
