/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(!head || !head.next) return head
  let resultNode = new ListNode(0)
  resultNode.next = head
  let cur = resultNode
  while(cur.next && cur.next.next) {
    let node1 = cur.next
    let node2 = cur.next.next
    cur.next = node2
    node1.next = node2.next
    cur.next.next = node1
    cur = cur.next.next
  }
  return resultNode.next
};
// @lc code=end

