/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  var map = {}
  for (let i = 0; i < A.length; i++) {
    const ele = A[i];
    if (ele in map) {
      map[ele] += 1
      if (map[ele] = A.length / 2) {
        return ele
      }
    } else {
      map[ele] = 1
    }
  }
};