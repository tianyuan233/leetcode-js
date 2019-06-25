
var isUgly = function (num) {
  if (num === 1) {
    return true
  } else if (num > 2 ** 31 - 1 || num <= 0) {
    return false
  }
  
  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2
    } else if (num % 3 === 0) {
      num = num / 3
    } else if (num % 5 === 0) {
      num = num / 5
    } else {
      return false
    }
    // console.log(num)
  }
  return true
};