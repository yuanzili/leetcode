/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  let result = [];
  let queue = [root];
  while (queue.length !== 0 && root !== null) {
    let length = queue.length;
    while (length !== 0) {
      const root = queue.shift();
      if (length === 1) {
        //最右边的
        result.push(root.val);
      }
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
      length--;
    }
  }
  return result;
};
// @lc code=end
