/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var profit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    const buyPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const sellPrice = prices[j];
      profit = Math.max(profit, buyPrice - sellPrice)
    }
  }
  return profit

};


var maxProfit = function (prices) {
  let lowestPrice = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    lowestPrice = Math.min(lowestPrice,prices[i])
    profit = Math.max(prices[i] - lowestPrice,profit)
  }

  return profit
}