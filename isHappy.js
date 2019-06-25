/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var flag = n    
  while (n > 1) {
    data = n.toString().split('')
    n = data.reduce((sum, ele) => sum + ele * ele, 0)
    console.log(n);
    
    if (n == 4){
      return false
    }
  }
  return true
  
};
isHappy(19)