/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var res = []
  function order(root, level = 0) {
    if (root) {
      res[level] = res[level] || []
      res[level].push(root.val)
      var rc = root.children
      rc.forEach(node => {
        order(node,level+1)
      });
    }
  }
  order(root)
  return res
  
};