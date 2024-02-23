/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isAlphaNumeric(digit) {
        return ((digit >= 'a') && (digit <= 'z')) || ((digit >= '0') && (digit <= '9'))
    }

    let i = 0, j = (s.length - 1)

    while (i < j) {
        let charI = s[i].toLowerCase()
        let charJ = s[j].toLowerCase()
        
        if (!isAlphaNumeric(charI)) {
            i++
            continue
        }

        if (!isAlphaNumeric(charJ)) {
            j--
            continue
        }

        if (charI !== charJ) {
            return false
        }

        i++; j--
    }

    return true
};