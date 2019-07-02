/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let candy_kind = new Set(candies).size
  let candy_num = candies.length
  if (candy_kind >= (candy_num / 2)) {
    return candy_num / 2
  } else {
    return candy_kind
  }

};



distributeCandies([1, 1, 1, 1, 2, 2, 2, 3, 3, 3])