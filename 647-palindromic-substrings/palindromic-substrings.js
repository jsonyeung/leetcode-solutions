/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    function getPalindromicStringFromMidpoint(idx) {
        let count = 0
        let i = 0

        // odd numbered palindromes
        while (s[idx - i] != null && s[idx + i] != null) {
            if (s[idx - i] !== s[idx + i]) break
            count++
            i++
        }

        // even numbered palindromes
        if (s[idx + 1] != null) {
            i = 0

            while (s[idx - i] != null && s[idx + i + 1] != null) {
                if (s[idx - i] !== s[idx + i + 1]) break
                count++
                i++
            }
        }

        return count
    }

    let total = 0

    for (let i = 0; i < s.length; i++) {
        total += getPalindromicStringFromMidpoint(i)
    }

    return total
};