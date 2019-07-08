var removeElements = function (head, val) {

  while(head && head.val === val) {
    head = head.next
  }

  var p = head

  while(p && p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
    }else {
      p = p.next
    }
  }

  return head
}