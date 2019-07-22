/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  var res = []
  queries.forEach(ele => {
    let index = ele[1]
    let val = ele[0]
    A[index] = A[index] + val
    let even_sum = A.reduce((sum,ele)=>{
      if(ele % 2 ===0) {
        return sum+ele
      }else {
        return sum
      }
    },0)
    res.push(even_sum)
  });
  console.log(res);
  return res
  

};
let A = [1, 2, 3, 4]
let queries = [[1, 0], [-3, 1], [-4, 0], [2, 3]]
sumEvenAfterQueries(A,queries)