/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  var res = []
  for (let i = left; i <=right; i++) {
    var temp = i.toString().split('')
    console.log(temp);
    var flag = true
    for (let index = 0; index < temp.length; index++) {
      if ( i % (+temp[index]) !== 0) {
        flag = false
      }
    }
    if (flag) {
      res.push(i)
    }
  }
  console.log(res);
  
};

selfDividingNumbers(1,22)