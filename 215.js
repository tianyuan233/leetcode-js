/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (array, k) {
//   for (var j = 0; j < k; j++) {
//     for (var i = 0; i < array.length - 1 - j; i++) {
//       if (array[i] < array[i + 1]) {
//         [array[i], array[i + 1]] = [array[i + 1], array[i]]
//         console.log(array)
//       }
//     }
//   }

//   return array[k-1]

// };


var findKthLargest = function (array, k) {
  function sortArray(array) {

    if (array.length < 2) {
      return array
    }

    var basic = array[0]
    var left = []
    var right = []

    for (let i = 1; i < array.length; i++) {
      if (array[i] < basic) {
        left.push(array[i])
      } else {
        right.push(array[i])
      }
    }
    return sortArray(left).concat(basic, sortArray(right))
  }
};