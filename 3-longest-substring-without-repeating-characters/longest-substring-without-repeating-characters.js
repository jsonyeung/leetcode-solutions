/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {}

    let start = 0
    let maxLength = 0
    
    for (let end = 0; end < s.length; end++) {
        map[s[end]] = (map[s[end]] || 0) + 1
        // console.log(map, start, end)

        if (map[s[end]] >= 2) {
            while (start < end && map[s[end]] >= 2) {
                map[s[start]]--
                start++
            }
        }

        maxLength = Math.max((end - start) + 1, maxLength)
    }
    
    return maxLength
};