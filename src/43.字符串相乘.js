/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1==='0' || num2==='0') return '0'
  const l1 = num1.length
  const l2 = num2.length
  const arr = new Array(l1+l2).fill(0)
  for(let i=l1-1;i>=0;i--) {
    for(let j=l2-1;j>=0;j--) {
      let p1 = i+j ,p2= i+j+1
      const sum = arr[p2] + Number(num1[i])*Number(num2[j])
      arr[p2] = sum % 10
      arr[p1] += Math.floor(sum/10) 
    }
  }
  if(arr[0] === 0) arr.shift()
  return arr.join('')
};
// @lc code=end

