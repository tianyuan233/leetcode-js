/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (numbers, target) {
  let i = 0
  let j = numbers.length - 1

  while (numbers[i] + numbers[j] !== target) {
    numbers[i] + numbers[j] > target ? j-- : i++
  }

  return [i + 1, j + 1]

}


twoSum()