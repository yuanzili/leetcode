/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// var reverseBetween = function(head, left, right) {
//    let dyNode = new ListNode(-1,head)
//    let pre = dyNode
//    for(let i=0;i<left-1;i++) {
//      pre = pre.next
//    }
//    let rightNode = pre
//    for(let i=0;i<right-left+1;i++) {
//      rightNode = rightNode.next
//    }
//   let cutNode = pre.next
//   let endNode = rightNode.next
//   //截断
//   pre.next = null
//   rightNode.next = null
//   const reverse = (reverseHead) => {
//     let pre = null;
//     let cur = reverseHead
//     while(cur) {
//       const next = cur.next
//       cur.next = pre
//       pre = cur
//       cur = next
//     }
//   }
//   reverse(cutNode)
//   //拼接
//   pre.next = rightNode
//   cutNode.next = endNode
//   return dyNode.next

// };
// var reverseBetween = function (head, left, right) {
//   let dyListNode = new ListNode(-1, head);
//   let pre = dyListNode;
//   //走到left前一位
//   for (let i = 0; i < left - 1; i++) {
//     pre = pre.next;
//   }
//   //操作需要反转的链条
//   //cur 是第一位
//   let cur = pre.next;
//   for (let i = 0; i < right - left; i++) {
//     const next = cur.next;
//     cur.next = next.next;
//     next.next = pre.next;
//     pre.next = next;
//   }

//   return dyListNode.next;
// };

var reverseBetween = function (head, left, right) {
  let listNode = new ListNode(-1, head);
  let leftNode = listNode;
  for (let i = 0; i < left - 1; i++) {
    leftNode = leftNode.next;
  }
  let rightNode = leftNode;
  for (let i = 0; i <= right - left; i++) {
    rightNode = rightNode.next;
  }
  //起点，也是反转后的重点
  let cutNode = leftNode.next;
  //right后面截取的部分
  let endNode = rightNode.next;
  //截断
  leftNode.next = null;
  rightNode.next = null;
  function reverse(head) {
    let tem = null;
    let cur = head;
    while (cur) {
      const next = cur.next;
      cur.next = tem;
      tem = cur;
      cur = next;
    }
  }
  reverse(cutNode);
  leftNode.next = rightNode;
  cutNode.next = endNode;
  return listNode.next;
};
// @lc code=end
