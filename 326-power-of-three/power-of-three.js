/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 1) return true
    if (n <= 0) return false

    while (n % 3 === 0) {
        n /= 3
        if (n === 1) return true
        if (n % 3 !== 0) return false
    }

    return false
};