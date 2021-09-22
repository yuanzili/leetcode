/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  let result = [];
  let queue = [root];
  while (queue.length !== 0 && root !== null) {
    let length = queue.length;
    let max = Math.pow(-2, 31);
    for (let i = 0; i < length; i++) {
      const root = queue.shift();
      max = Math.max(root.val, max);
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
    result.push(max);
  }
  return result;
};
// @lc code=end
