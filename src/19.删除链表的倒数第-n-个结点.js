/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     const listNode = new ListNode(0,head)
//     let fast = head
//     let slow = head
//     for(let i=0;i<n;i++) {
//       fast = fast.next
//     }
//     if(!fast) return head.next
//     while(fast.next) {
//       fast = fast.next
//       slow = slow.next
//     }
//     slow.next = slow.next.next
//     return listNode.next
// };
var removeNthFromEnd = function (head, n) {
  let listNode = new ListNode(0, head);
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return head.next;
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return listNode.next;
};
// @lc code=end
