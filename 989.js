/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  var B = K.toString().split('').map(ele => ele / 1)
  var len_A = A.length
  var len_B = B.length
  var len_max = Math.max(len_A, len_B)
  var C = new Array(len_max)
  C.fill(0)

  while (A.length !== B.length) {
    A.length > B.length ? B.unshift(0) : A.unshift(0)
  }


  for (let i = len_max - 1; i > 0; i--) {
    var temp = A[i] + B[i]
    if (temp > 9) {
      C[i] = temp - 10 + C[i]
      C[i - 1] = C[i - 1] + 1
    } else if (temp === 9) {
      if (C[i] === 1) {
        C[i] = 0
        C[i - 1] = C[i - 1] + 1
      } else {
        C[i] = A[i] + B[i] + C[i]
      }
    } else {
      C[i] = A[i] + B[i] + C[i]
    }
  }

  if (A[0] + B[0] > 9) {
    C[0] = A[0] + B[0] + C[0] - 10
    C.unshift(1)
  } else if (A[0] + B[0] === 9 && C[0] === 1) {
    C[0] = 0
    C.unshift(1)
  } else {
    C[0] = A[0] + B[0] + C[0]
  }
  return C
};

addToArrayForm([9, 9, 9], 1)