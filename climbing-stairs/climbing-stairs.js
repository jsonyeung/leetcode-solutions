/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = {}

    function climb(step) {
        if (step === n) return 1
        if (step > n) return 0

        if (memo[step] != null) {
            return memo[step]
        }

        let sub = climb(step + 1) + climb(step + 2)
        memo[step] = sub
        return sub
    }

    return climb(0)
};