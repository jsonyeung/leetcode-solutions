/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    /*
        eccbbdec
        
        right = {
            e: 1
            c: 1
            b: 0
            d: 1
        }

        left = {
            e: 1
            c: 2
            b: 2
        }
    */

    let right = {}

    for (let char of s) {
        right[char] = (right[char] || 0) + 1
    }

    let left = new Set()
    let remaining = 0
    let results = []
    let i = 1

    for (let char of s) {
        if (!left.has(char)) {
            left.add(char)
            remaining += right[char]
        }

        remaining--
        right[char]--

        if (right[char] === 0 && remaining <= 0) {
            results.push(i)
            i = 0
        }

        i++
    }

    return results
};