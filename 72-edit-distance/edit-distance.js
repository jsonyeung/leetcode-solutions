/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/*

 decision tree

 left = 0, right = 0

 // inserts we would have to do to get to match
 if (left >= word1 len) return word2.len - right
 if (right >= word2 len) return word1.len - left

 for each choice
    1. delete from word1 (left+1)
    2. delete from word2 (right+1)
    3. sub characters between word1 and word2 (left+1, right+1)


*/

var minDistance = function(word1, word2) {
    let memo = {}

    const key = (i, j) => `${i}_${j}`

    function helper(i = 0, j = 0) {
        if (i >= word1.length) {
            return word2.length - j
        }

        if (j >= word2.length) {
            return word1.length - i
        }

        if (word1[i] === word2[j]) {
            return helper(i+1, j+1)
        }

        if (memo[key(i, j)] != null) {
            return memo[key(i, j)]
        }

        memo[key(i, j)] = 1 + Math.min(
            helper(i+1, j),
            helper(i, j+1),
            helper(i+1, j+1)
        )
        return memo[key(i, j)]
    }

    return helper()
};