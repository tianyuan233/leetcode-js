/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var res = []
  function order(root, level = 0) {
    if (root) {
      res[level] = res[level] || []
      res[level].push(root.val)
      if (level % 2 === 0) {
        order(root.left, level + 1)
        order(root.right, level + 1)
      } else {
        order(root.right, level + 1)
        order(root.left, level + 1)
      }
    }
  }
  order(root)
  return res

};