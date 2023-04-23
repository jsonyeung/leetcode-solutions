/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 /*

a aaa = true

ab aaa = false

aaaa aaa = false

'' 'abc' = true

 */
var canConstruct = function(ransomNote, magazine) {
    let stock = {}

    for (let char of magazine) {
        stock[char] = (stock[char] || 0) + 1
    }

    for (let char of ransomNote) {
        if (stock[char] == null) return false
        if (--stock[char] < 0) return false 
    }

    return true
};