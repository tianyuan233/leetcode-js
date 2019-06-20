let mySqrt = function (x) {
  let start = 0
  let end = x
  if (x <= 1) {
    return x
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let sqr = mid * mid

    if (sqr === x || mid === start) {
      return mid
    } else if (sqr > x) {
      end = mid
    } else {
      start = mid
    }
  }
  return mid
}


console.log(mySqrt(8))
