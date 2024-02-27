/**
 * @param {string} digits
 * @return {string[]}
 */

const KEY_MAPPINGS = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

var letterCombinations = function(digits) {
    let results = []

    function helper(i = 0, combo = '') {
        if (i >= digits.length) {
            if (combo) results.push(combo)
            return
        }

        for (let letter of KEY_MAPPINGS[digits[i]]) {
            helper(i + 1, combo + letter)
        }
    }

    helper()
    return results
};