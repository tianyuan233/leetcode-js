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
  }

  return profit
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
