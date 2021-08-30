/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const listNode = new ListNode(0,head)
  let cur = listNode
  const endNode = new ListNode(0)
  let end = endNode
  while(cur.next) {
    if(cur.next.val >=x) {
      end.next = cur.next
      end = end.next
      cur.next = cur.next.next
    }else {
      cur = cur.next
    }
  }
  end.next = null
  cur.next = endNode.next
  return listNode.next
};
// @lc code=end

