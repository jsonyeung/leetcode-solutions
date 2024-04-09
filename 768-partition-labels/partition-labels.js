/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let count = {}

    for (let char of s) {
        count[char] = (count[char] || 0) + 1
    }

    let visited = new Set()
    let results = []

    let remaining = 0
    let start = 0

    for (let i = 0; i < s.length; i++) {
        if (!visited.has(s[i])) {
            remaining += count[s[i]]
            visited.add(s[i])
        }
        
        remaining--

        if (remaining === 0) {
            results.push(i - start + 1)
            start = i + 1
        }
    }

    return results
};