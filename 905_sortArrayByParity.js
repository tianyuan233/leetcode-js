/**
 * @param {number[]} A
 * @return {number[]}
 */
let sortArrayByParity = function (A) {
  let even = []
  let odd = []

  A.forEach(element => {
    if (element % 2 === 0) {
      even.push(element)
    } else {
      odd.push(element)
    }

  })
  return even.concat(odd)
}


console.log(sortArrayByParity())
