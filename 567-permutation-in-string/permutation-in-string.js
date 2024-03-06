/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false
    }

    let frequencies = {}
    let count = s1.length

    for (let char of s1) {
        frequencies[char] = (frequencies[char] || 0) + 1
    }

    let left = 0
    let right = 0

    while (right < s2.length) {
        // expansion: removing frequencies and decrementing count
        if (frequencies[s2[right]] > 0) count--

        frequencies[s2[right]]--
        right++

        if (count === 0) {
            return true
        }

        // contraction: when the sliding window is at max range on s1.length
        // re-add frequencies and increment count
        if ((right - left) === s1.length) {
            if (frequencies[s2[left]] >= 0) count++

            frequencies[s2[left]]++
            left++
        }
    }

    return false
};