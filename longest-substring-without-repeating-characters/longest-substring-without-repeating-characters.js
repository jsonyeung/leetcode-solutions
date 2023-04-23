/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let maxSub = 0

    let start = 0
    let end = 0

    while (end < s.length) {
        // shrinking
        if (set.has(s[end])) {
            while (start < end && set.has(s[end])) {
                set.delete(s[start])
                start++
            }

        // expanding
        } else {
            set.add(s[end])
            maxSub = Math.max(maxSub, set.size)
            end++
        }
    }
    
    return maxSub
};