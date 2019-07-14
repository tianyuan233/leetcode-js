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
var deleteDuplicates = function (head) {
  if (head == null || head.next == null) {
    return head
  }

  var p1 = head
  while(p1) {
    var p2 = p1.next
    while (p2 != null && p2.val == p1.val) {
      p2 = p2.next;
    }
    p1.next = p2;
    p1 = p2;
  }

  return head
};