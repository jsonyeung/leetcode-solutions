/**
 * @param {string} s
 * @return {number}
 */
 /*

"a" = 1 (a)

"abb" = 3 (bab)

"abbc" = 3 (bab or bcb)

"dadbbbc" = 5 (dbabd ...)

d: 2
b: 3
a: 1
c: 1

d: 2 % 2 = 1
b: 3 % 2 = 1
results = 1 + 1 (d) + 1 (b) = 3

---

results = 1

find frequency for each character
  get number of pairs for each frequency characters
    if (frequency > 1) add to results

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