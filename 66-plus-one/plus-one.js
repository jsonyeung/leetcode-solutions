/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let results = digits.slice()
    let pointer = (results.length - 1)

    results[pointer]++

    while (results[pointer] === 10) {
        results[pointer] = 0
        if (pointer === 0) results.unshift(1)
        else results[pointer - 1]++
        pointer--
    }

    return results
};