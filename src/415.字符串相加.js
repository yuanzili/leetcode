/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function(num1, num2) {
//   let length = num1.length > num2.length ? num1.length :num2.length
//   num1 = num1.split('').reverse()
//   num2 = num2.split('').reverse()
//   let more = 0
//   let result = ''
//   for(let i=0;i<length;i++ ) {
//     let a = num1[i]?num1[i] - 0:0
//     let b = num2[i]?num2[i] - 0:0
//     const sum = a + b + more
//     more = Math.floor(sum / 10)
//     result = sum % 10 + result
//   }
//   return more? more +result:result
// };
var addStrings = function(num1, num2) {
  let length = num1.length > num2.length ? num1.length :num2.length
    let more = 0
  let result = ''
  for(let i=length-1;i>=0;i-- ) {
    const num = length -i
    let a = num>num1.length?0:num1.charAt(num1.length-num) - 0
    let b = num>num2.length?0:num2.charAt(num2.length-num) - 0
    const sum = a + b + more
    more = Math.floor(sum / 10)
    result = sum % 10 + result
  }
  return more? more +result:result
}
// @lc code=end

