/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const list = new ListNode(0)
  let header = list
  let carry = 0
  while(l1!==null||l2!==null||carry!==0) {
      const l1Val = l1!==null?l1.val:0
      const l2Val = l2!==null?l2.val:0
      const sum = l1Val+l2Val+carry
      carry = Math.floor(sum /10)
      const item = new ListNode(sum%10)
      header.next = item
      header = header.next
      l1 = l1?l1.next:null
      l2 = l2?l2.next:null
  }
  return list.next
};
// @lc code=end

