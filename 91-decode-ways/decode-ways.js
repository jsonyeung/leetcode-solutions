/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = { [s.length]: 1 }

    function isValidDoubleDigit(i) {
        return s[i] === '1' || s[i] === '2' && 
            ['0', '1', '2', '3', '4', '5', '6'].includes(s[i + 1])
    }

    function traverse(i = 0) {
        if (dp[i] != null) {
            return dp[i]
        }

        if (s[i] === '0') {
            return 0
        }

        let result = traverse(i + 1)

        if (i + 1 < s.length && isValidDoubleDigit(i)) {
            result += traverse(i + 2)
        }

        dp[i] = result
        return result
    }

    return traverse()
};