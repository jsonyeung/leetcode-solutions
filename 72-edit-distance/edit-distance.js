/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 /*

 given the largest string out of the two

 for the first character, we can:
    2. delete a character
    3. replace a character

    
                           horse
                            rose
                        /    |      \       
                        V   
                     horse
                      rose
                         ^


 */
var minDistance = function(word1, word2) {
    const memo = {}
    const key = (i, j) => `${i}_${j}`

    function helper(i = 0, j = 0) {
        // console.log(i, j, word1[i], word2[j])

        if (i >= word1.length) {
            // remaining is insertions
            return (word2.length - j)
        }

        if (j >= word2.length) {
            return (word1.length - i)
        }

        // letters match, do nothing
        if (word1[i] === word2[j]) {
            return helper(i+1, j+1)
        }

        if (memo[key(i, j)] != null) {
            return memo[key(i, j)]
        }

        memo[key(i, j)] = 1 + Math.min(
            helper(i+1, j), // delete letter from word1
            helper(i, j+1), // delete letter from word2
            helper(i+1, j+1) // sub letter from word1 and word2
        )

        return memo[key(i, j)]
    }

    return helper()
};