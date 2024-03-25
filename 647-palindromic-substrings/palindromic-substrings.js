/**
 * @param {string} s
 * @return {number}
 */

function isPalindrome(string) {
    return string.split('').reverse().join('') === string
}

var countSubstrings = function(s) {
    let count = 0

    for (let i = 0; i < s.length; i++) {
        let left = i
        let right = i

        while (left >= 0 && right < s.length) {
            if (s[left] !== s[right]) break

            count++
            left--; right++
        }

        // shift right once to check even palindromes
        left = i
        right = i + 1

        while (left >= 0 && right < s.length) {
            if (s[left] !== s[right]) break

            count++
            left--; right++
        }
    }

    return count
};