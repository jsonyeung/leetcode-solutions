/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*

apple, plpea = true

apple, pple = false
apple, appple = false
appple, aaaple = false

*/
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let stock = {}

    for (let char of s) {
        stock[char] = (stock[char] || 0) + 1
    }

    for (let char of t) {
        if (!stock.hasOwnProperty(char)) {
            return false
        }

        stock[char]--
        if (stock[char] < 0) {
            return false
        }
    }

    return true
};