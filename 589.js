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
var levelOrder = function (root) {
  var res = []
  function order(root) {
    var temp = []
    if (root) {
      temp.push(root.val)
      var cd = root.children
      cd.forEach(ele => {
        order(ele)
      });
    }
    res.push(temp)
  }
  order(root)
  return res
};