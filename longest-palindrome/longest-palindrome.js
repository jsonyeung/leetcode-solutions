/**
 * @param {string} s
 * @return {number}
 */
 /*

"a" = 1 (a)

"abb" = 3 (bab)

"abbc" = 3 (bab or bcb)

"dadbbbc" = 5 (dbabd ...)

 */
var longestPalindrome = function(s) {
  let stock = {}
  let result = 0

  for (let char of s) {
    stock[char] = (stock[char] || 0) + 1

    if (stock[char] % 2 === 0) {
        result += 2
    }
  }

  // add 1 to include letter in centre (e.g. dbabd)
  if (s.length > result) result++

  return result
};