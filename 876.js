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
var middleNode = function (head) {
  var fast = head
  var slow = head

  while (fast && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow

};