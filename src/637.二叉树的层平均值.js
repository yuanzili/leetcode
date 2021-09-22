/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  let result = [];
  let queue = [root];
  while (queue.length !== 0 && root !== null) {
    let length = queue.length;
    let curList = [];
    for (let i = 0; i < length; i++) {
      const root = queue.shift();
      curList.push(root.val);
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
    result.push(curList.reduce((pre, cur) => pre + cur, 0) / curList.length);
  }
  return result;
};
// @lc code=end
