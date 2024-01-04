/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n === 0) return false

    let factors = [5, 3, 2]

    for (let factor of factors) {
        while (n !== 1 && n % factor === 0) {
            n /= factor
        } 
    }

    return n === 1
};