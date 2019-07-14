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
var root = arr2tree([1, 2, 3])
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  console.log(root)
  if (!root) {
    return 0
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


console.log(maxDepth(root));
