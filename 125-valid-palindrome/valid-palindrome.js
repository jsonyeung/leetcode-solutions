/**
 * @param {string} s
 * @return {boolean}
 */
const isAlphaNumeric = (char) => {
    return ((char >= 'a') && (char <= 'z')) ||  ((char >= '0') && (char <= '9'))
} 

var isPalindrome = function(s) {
    let left = 0, right = (s.length - 1)

    while (left < right) {
        let leftChar = s[left].toLowerCase()
        let rightChar = s[right].toLowerCase()

        if (!isAlphaNumeric(leftChar)) {
            left++
            continue
        }

        if (!isAlphaNumeric(rightChar)) {
            right--
            continue
        }

        if (leftChar !== rightChar) {
            return false
        }

        left++
        right--
    }

    return true
};