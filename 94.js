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
var inorderTraversal = function (root) {

  var res = []
  function order(root) {
    if (root) {
      order(root.left)
      res.push(root.val)
      order(root.right)
    }
  }

  order(root)
  return res
};