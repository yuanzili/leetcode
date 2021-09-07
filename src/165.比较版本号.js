/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// var compareVersion = function (version1, version2) {
//   const v1 = version1.split(".");
//   const v2 = version2.split(".");
//   const len = v1.length > v2.length ? v1.length : v2.length;
//   for (let i = 0; i < len; i++) {
//     let v1Num = v1[i] ? Number(v1[i]) : 0;
//     let v2Num = v2[i] ? Number(v2[i]) : 0;
//     if (v1Num > v2Num) {
//       return 1;
//     } else if (v1Num < v2Num) {
//       return -1;
//     }
//   }
//   return 0;
// };

var compareVersion = function (version1, version2) {
  const n = version1.length,
    m = version2.length;
  let i = 0,
    j = 0;
  while (i < n || j < m) {
    let x = 0;
    for (; i < n && version1[i] !== "."; ++i) {
      x = x * 10 + Number(version1.charAt(i));
    }
    ++i; // 跳过点号
    let y = 0;
    for (; j < m && version2.charAt(j) !== "."; ++j) {
      y = y * 10 + Number(version2.charAt(j));
    }
    ++j; // 跳过点号
    if (x !== y) {
      return x > y ? 1 : -1;
    }
  }
  return 0;
};

// @lc code=end
