/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const stack = []
   for(let i=0;i<s.length;i++) {
     let c = s.charAt(i)
     switch(c) {
       case '(':
         stack.push(')');
         break
       case '{':
         stack.push('}')
         break
         case '[':
         stack.push(']')
         break
         default:
           if(stack.pop() !== c   ) {
             return false
           } 
           }
   }
   return stack.length === 0
};
// @lc code=end

