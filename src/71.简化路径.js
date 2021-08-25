/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
   const stack = []
   const list = path.split('/')
   for(let i=0;i<list.length;i++) {
     if(!list[i] || list[i] === '.') continue
     if(list[i] === '..') {
       stack.pop()
     }else {
       stack.push(list[i])
     }
   }
   return '/'+stack.join('/')
};
// @lc code=end

