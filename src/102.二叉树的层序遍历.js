/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  if (root === null) return [];
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let curList = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let root = queue.shift();
      curList.push(root.val);
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
    result.push(curList);
  }
  return result;
};
// @lc code=end
