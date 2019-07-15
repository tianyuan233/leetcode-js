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
var averageOfLevels = function (root) {
  var res = []
  function order(root, level = 0) {
    if (root) {
      res[level] = res[level] || []
      res[level].push(root.val)
      order(root.left, level + 1)
      order(root.right, level + 1)
    }
  }
  order(root)

  return res.map(ele => {
    return ele.reduce((prev, item, id) => {
      return (prev * id + item) / (id + 1)
    })
  })


};