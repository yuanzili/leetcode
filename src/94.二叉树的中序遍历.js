/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//   const res = []
//   let pre = null
//   while(root) {
//     if(root.left) {
//       pre = root.left
//       //走到当前分支最右侧的最后一个
//       while(pre.right && pre.right!==root) {
//         pre = pre.right
//       }
//       if(!pre.right) {
//          //连接
//          pre.right = root
//          root = root.left
//       }else {
//         res.push(root.val)
//         root = root.right
//         pre.right = null
//       }
//     }else {
//       res.push(root.val)
//       root = root.right
//     }
//   }
//   return res
// };

var inorderTraversal = function(root) {
  const res = []
  const stack = []
  while(root || stack.length>0) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}
// @lc code=end

