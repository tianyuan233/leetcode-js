/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  var sort_heights = Array.from(heights).sort((a, b) => { return a - b })
  var count = 0
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sort_heights[i]) {
      count++
    }
  }
  console.log(count);
};

heightChecker([1, 1, 1, 1, 1])