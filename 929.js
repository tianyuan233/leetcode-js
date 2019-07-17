/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  var res = emails
    .map(e => {
      return e.split('@')
    })
    .map(e => {
      return [e[0].split('+')[0].split('.').join(''), e[1]].join('@')
    })
  return Array.from(new Set(res)).length
};







numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])