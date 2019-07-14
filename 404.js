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
var root = arr2tree([1,2,3,4,5])


var sumOfLeftLeaves = function (root) {
  function tree2arr(root, rootPos = 0, res = []) {
    if (root.left) {
      res.push(root.left.val)
      tree2arr(root.left, rootPos * 2 + 1, res)
      tree2arr(root.right, rootPos * 2 + 2, res)
    }
    return res
  }
  // return tree2arr(root).reduce((sum, ele) => { return sum + ele })
  return tree2arr(root)
};

console.log(sumOfLeftLeaves(root));
