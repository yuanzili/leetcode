/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) return [];
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const curList = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      const root = queue.shift();
      curList.push(root.val);
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
    result.push(curList);
  }
  return result.reverse();
};
// @lc code=end
