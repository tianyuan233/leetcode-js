/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) {
    return null;
  }

  if (!t1||!t2){
    return t1 || t2
  }

  let root = new treeNode(t1.val + t2.val)

  root.left = mergeTrees(t1.left, t2.left)
  root.right = mergeTrees(t1.right,t2.right)

  return root
};