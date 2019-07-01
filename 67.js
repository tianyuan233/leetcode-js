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
  var C = new Array(len_max)
  C.fill(0)

  while (A.length !== B.length) {
    A.length > B.length ? B.unshift(0) : A.unshift(0)
  }


  for (let i = len_max - 1; i >= 0; i--) {
    var temp = A[i] + B[i]
    if (temp > 1) {
      C[i - 1] = C[i - 1] + 1
    } else if (temp === 1) {
      if (C[i] === 1) {
        C[i] = 0
        C[i - 1] = C[i - 1] + 1
      } else {
        C[i] = A[i] + B[i]
      }

    }
  }

  // if (A[0]+ B[0] > 1) {
  //   C.unshift(1)
  // } else if (A[0] + B[0] === 1 && C[0] === 1){
  //   C[0] = 0
  //   C.unshift(1)
  // } else {
  //   C[0] = A[0]+B[0]
  // }
  console.log(A);
  console.log(B);
  console.log(C);



  return C.join('')


}


addBinary('11', '1')