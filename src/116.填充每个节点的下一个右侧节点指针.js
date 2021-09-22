/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let result = [];
  let queue = [root];
  while (queue.length !== 0 && root !== null) {
    let length = queue.length;
    const newQueue = [];
    for (let i = 0; i < length; i++) {
      let root = queue.shift();
      root.next = queue[0] || null;
      if (root.left) {
        newQueue.push(root.left);
        newQueue.push(root.right);
      }
    }
    queue = newQueue;
  }
  return root;
};
// @lc code=end
