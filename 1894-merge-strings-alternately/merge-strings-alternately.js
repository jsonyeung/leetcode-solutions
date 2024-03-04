/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let results = ''
    let a = 0, b = 0

    while (a < word1.length && b < word2.length) {
        results += word1[a] + word2[b]
        a++; b++
    }

    results += word1.substring(a, word1.length)
    results += word2.substring(b, word2.length)
    return results    
};