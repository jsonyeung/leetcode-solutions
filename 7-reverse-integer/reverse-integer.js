/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0

    let isSigned = x < 0
    let results = []

    if (isSigned) {
        results.push('-')
        x *= -1
    }

    while (x > 0) {
        let digit = x % 10
        results.push(digit)
        x = Math.floor(x / 10)
    }

    let result = parseInt(results.join(''))
    let BIT_LIMIT = Math.pow(2,31) - 1 

    if (result > BIT_LIMIT || result < -BIT_LIMIT) {
        return 0
    }

    return result
};