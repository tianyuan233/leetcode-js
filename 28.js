/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0
  }

  if (haystack.includes(needle)) {
    return haystack.split(needle)[0].length
  } else {
    return -1
  }
};