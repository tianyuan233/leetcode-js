/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  var res = []
  function order(root) {
    if (root) {
      res.push(root.val)
      var cd = root.children
      cd.forEach(ele => {
        order(ele)
      });
    }
  }
  order(root)
  return res
};