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
var postorder = function (root) {
  var res = []
  function order(root) {
    if (root) {
      var cd = root.children
      cd.forEach(ele => {
        order(ele)
      });
      res.push(root.val)
    }
  }
  order(root)
  return res

};