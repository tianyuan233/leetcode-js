/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const threshold = Math.pow(2, 31);

    if (x === 0) {
        return 0
    }
    const result = x > 0 ? x.toString().split('').reverse().join('') / 1 :
        (-x).toString().split('').reverse().join('') / -1;

    if (result > threshold || result < -threshold) {
        return 0;
    } else {
        return result;
    }
};