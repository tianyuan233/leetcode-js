/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function (l1, l2) {
  var node = new ListNode()
  var res = node
  var carry = 0
  while (l1 || l2) {
    node.next = new ListNode()
    node = node.next
    var l1_value = l1 ? l1.val : 0
    var l2_value = l2 ? l2.val : 0

    var sum = l1_value + l2_value + carry
    if (sum > 9) {
      node.val = sum - 10
      carry = 1
    } else {
      node.val = sum
      flag = 0
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

  }

  if (carry === 1) {
    node.next = new ListNode(1)
  }
  return res.next
};