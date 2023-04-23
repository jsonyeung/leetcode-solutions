/**
 * @param {string} s
 * @return {boolean}
 */
 /*

 Assumptions:
 - spaces are at most 1 space-long
 

 */
var isPalindrome = function(s) {
    let start = 0
    let end = s.length - 1

    function isAlphaNumeric(char) {
        return ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'))
    }

    while (start < end) {
        let startChar = s[start].toLowerCase()
        let endChar = s[end].toLowerCase()

        if (!isAlphaNumeric(startChar)) {
            start++
            continue
        }

        if (!isAlphaNumeric(endChar)) {
            end--
            continue
        }

        if (startChar !== endChar) {
            return false
        }

        start++
        end--
    }

    return true
};