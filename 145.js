/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  var res = []
  function order(root) {
    if (root) {
      order(root.left)
      order(root.right)
      res.push(root.val)
    }
  }
  order(root)
  return res
};