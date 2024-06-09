/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let visited = new Set()
    let start = 0, end = 0

    let longest = 0

    while (end < s.length) {
        if (visited.has(s[end])) {
            // we have to contract
            while (visited.has(s[end]) && start < end) {
                visited.delete(s[start])
                start++
            }
        }

        visited.add(s[end])
        longest = Math.max((end - start + 1), longest)
        end++
    }

    return longest
};