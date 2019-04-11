/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortArrayByParityII = function (A) {
  let even = []
  let odd = []
  let res = []

  A.forEach(element => {
    if (element % 2 === 0) {
      even.push(element)
    } else {
      odd.push(element)
    }

  })

  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      res.push(even.shift())
    } else {
      res.push(odd.shift())
    }
  }
  return res

}

sortArrayByParityII()