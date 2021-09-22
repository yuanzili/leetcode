/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  let queue = [root];
  while (queue.length !== 0 && root !== null) {
    let length = queue.length;
    let curList = [];
    for (let i = 0; i < length; i++) {
      const root = queue.shift();
      curList.push(root.val);
      if (root.children && root.children.length > 0)
        queue = queue.concat(root.children);
    }
    result.push(curList);
  }
  return result;
};
// @lc code=end
