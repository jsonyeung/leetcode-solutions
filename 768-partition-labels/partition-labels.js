/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let map = {}

    for (let char of s) {
        map[char] = (map[char] || 0) + 1
    }

    let seen = new Set()
    let remaining = 0
    let partitions = []

    let start = 0

    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        if (!seen.has(s[i])) {
            seen.add(s[i])
            remaining += map[s[i]]
        }
        
        remaining--

        if (remaining <= 0) {
            partitions.push(i - start + 1)
            start = i + 1
        }
    }

    return partitions
};