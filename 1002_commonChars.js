/**
 * @param {string[]} A
 * @return {string[]}
 */
let commonChars = function (A) {
  let start = A[0].split('')

  for (let i = 1; i < A.length; i++) {
    const element = A[i].split('')
    start = start.filter(ele => {
      const id = element.indexOf(ele)
      if (id > -1) {
        // important! 避免start中相同的元素共用element中的元素再次比较，类似于消消乐
        element[id] = 'found'
        return true
      } else {
        return false
      }
    })
  }
  return start
}

console.log(commonChars(['cool', 'lock', 'cook']))
