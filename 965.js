/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let value = root.val

  function isUnival(root,value) {
    if (root == null) {
      return true
    }
    if (root.left !== null && root.left.val != value) {
      return false
    }

    if (root.right !== null && root.right.val != value) {
      return false
    }

    return isUnival(root.left,value) && isUnival(root.right,value)

  }


  return isUnival(root,value)
};