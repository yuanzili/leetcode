/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//    let left = 0
//    let right = 0
//    let set = new Set()
//    let max = 0
//    while(left<s.length && right<s.length) {
//      while((!set.has(s[right]) && right<s.length)) {
//        set.add(s[right])
//        right++
//      }
//     max = Math.max(max,right-left)
//     set.delete(s[left])
//     left++
//    }
//    return max
// };
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let max = 0;
  let set = new Set();
  while (left < s.length && right < s.length) {
    while (right < s.length && !set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      right++;
    }
    //当前right在set内有重复的了
    max = Math.max(max, right - left);
    set.delete(s.charAt(left));
    left++;
  }
  return max;
};
// @lc code=end
