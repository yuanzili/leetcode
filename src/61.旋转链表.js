/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(!head) return head
  let lastNode = head
  let n = 1
  while(lastNode.next) {
    lastNode = lastNode.next
    n++
  }
  lastNode.next = head
  let move = n-(k % n )
  while(move>0) {
    lastNode = lastNode.next
    move--
  }
  let res = lastNode.next
  lastNode.next= null
  return res
};
// @lc code=end

