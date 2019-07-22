/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

let map = {}
var encode = function (longUrl) {
  let key = Date.now().toString(36)
  map[key] = longUrl
  return "http://tinyurl.com/" + key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  let key = shortUrl.split('.com/')[1]
  return map[key]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */