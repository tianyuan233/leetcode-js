/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

     return x.toString().split('').reverse().join('') / 1 == x ? true:false;

    

};

console.log(isPalindrome(121))