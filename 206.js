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
var reverseList = function (head) {

  if (!head) {
    return head
  }

  var res = {
    val: head.val,
    next: null
  }

  while(head.next) {
    head = head.next
    res = {
      val:head.val,
      next:res
    }
  }

  return res

};



console.log(reverseList({
  val: 1,
  next: {
    val: 4,
    next: {
      val: 7,
      next: {
        val: 100,
        next: null
      }
    }
  }
}));
