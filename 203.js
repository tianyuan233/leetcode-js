var removeElements = function (head, val) {
  var dummy = new ListNode()
  dummy.next = head

  var list = dummy

  while (dummy.next) {
    if (dummy.next.val == val) {
      dummy.next = dummy.next.next
    } else {
      dummy = dummy.next
    }
  }
  return list.next

};