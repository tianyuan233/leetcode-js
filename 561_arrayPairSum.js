// 题目大意是， 给的数组大小是2n， 把数组分成n组， 每组2个元素， 每个组取最小值， 这样就能得到n个值， 
// 怎样分组才能使这n个数相加最小。

// 大致思路： 最大和第二大一组， 取最小值即第二大的数， 依次类推。。。 这样就需要排序， 隔一个取一个。

/**
 * @param {number[]} nums
 * @return {number}
 */
let arrayPairSum = function (nums) {
  return nums.sort((a, b) => a - b)
    .filter((x, index) => index % 2 === 0)
    .reduce((sum, ele) => {
      return sum + ele
    })


}

console.log(arrayPairSum([1, 2, 3, 4, 5, 6]))

