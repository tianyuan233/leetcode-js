/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let lowest = prices[0]
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    lowest = Math.min(prices[i], lowest)
    profit = Math.max(prices[i] - lowest, profit)
    console.log('----start----')
    console.log('lowest', lowest)
    console.log('profit', profit)
    console.log('----end----')

  }

  return profit
}
console.log(maxProfit([7, 6, 5, 4, 3, 2, 1]))
