function arr2tree(arr, rootPos = 0) {
  if (arr[rootPos] == null) {
    return null
  }

  return {
    val: arr[rootPos],
    left: arr2tree(arr, rootPos * 2 + 1),
    right: arr2tree(arr, rootPos * 2 + 2)
  }
}
var root = arr2tree([10, 5, 15, 3, 7, null, 18])

var rangeSumBST = function (root, L, R) {
  var res = []
  function tra(root) {
    if (root) {
      if ((root.val >= L) && (root.val <= R)) {
        res.push(root.val)
      }
      tra(root.left)
      tra(root.right)
    }
    return res
  }
  tra(root)
  return res.reduce((sum, ele) => { return sum + ele })

};

console.log(rangeSumBST(root, 7, 15));
