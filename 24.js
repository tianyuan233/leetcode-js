
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {

  if (!head || !head.next) {
    return head
  }

  var a = head
  var b = a.next
  var c = b.next
  b.next = a
  a.next = swapPairs(c)

  return b

};