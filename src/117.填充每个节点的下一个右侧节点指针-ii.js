/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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
      const node = queue.shift();
      node.next = queue[0] || null;
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }
    queue = newQueue;
  }
  return root;
};
// @lc code=end
