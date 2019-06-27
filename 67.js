/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var A = a.split('').map(ele => ele / 1)
  var B = b.split('').map(ele => ele / 1)
  len_A = A.length
  len_B = B.length
  len_max = Math.max(len_A, len_B)

  while (A.length !== B.length) {
    A.length > B.length ? B.unshift(0) : A.unshift(0)
  }
  console.log(A);
  console.log(B);

  for (let i = len_max - 1; i >= 0; i--) {
  }
}


addBinary('11', '1')