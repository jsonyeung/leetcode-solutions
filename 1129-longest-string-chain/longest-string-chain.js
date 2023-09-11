/**
 * @param {string[]} words
 * @return {number}
 */
const deleteCharAt = (word, i) => {
    const result = word.split('')
    result.splice(i, 1)
    return result.join('')
}

var longestStrChain = function(words) {
    const sorted = words.sort((a, b) => a.length - b.length)
    const memo = {}

    let longestChain = 0

    for (let i = 0; i < sorted.length; i++) {
        const word = sorted[i]
        memo[word] = 1

        for (let charI = 0; charI < word.length; charI++) {
            const next = deleteCharAt(word, charI)

            if (memo[next] != null) {
                memo[word] = Math.max(memo[word], memo[next] + 1)
            }
        }

        longestChain = Math.max(longestChain, memo[word])
    }

    return longestChain
};