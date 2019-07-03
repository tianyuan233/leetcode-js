/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  var res = A[0].split('')
  for (let i = 1; i < A.length; i++) {
    var ele = A[i].split('')
    res = res.filter(v =>{
      var index = ele.indexOf(v)
      if (index > -1) {
        ele[index] = 'found'
        return true
      } else {
        return false
      }
    })
  }
  return res
};
commonChars(["cool", "lock", "cook"])