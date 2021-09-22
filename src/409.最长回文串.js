/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }
  let count = 0;
  map.forEach((value) => {
    if (value % 2) {
      count++;
    }
  });
  return count > 1 ? s.length - count + 1 : s.length;
};
// @lc code=end
