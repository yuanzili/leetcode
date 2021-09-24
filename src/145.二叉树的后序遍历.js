/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  //后序排列  左右中
  //压栈顺序  中右左
  let stack = [];
  const res = [];
  if (root) stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }
    stack.push(node);
    stack.push(null);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return res;
};
// @lc code=end
