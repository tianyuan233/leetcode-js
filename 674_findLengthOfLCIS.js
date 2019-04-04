/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {

    if (nums.length === 0) return 0;

    var count = 1;
    var max = 1;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] < nums[index + 1]) {
            count++;
            console.log('------');
            console.log(count);
            console.log('------');
            max = Math.max(count, max);
        } else {
            count = 0;
        }
    }
    return max;
};


console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))