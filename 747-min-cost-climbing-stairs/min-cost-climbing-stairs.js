/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let memo = {}

    function helper(i = 0) {
        if (i >= cost.length) {
            return 0
        }

        if (memo[i] != null) {
            return memo[i]
        }

        return memo[i] = cost[i] + Math.min(
            helper(i+1),
            helper(i+2)
        )
    }

    return Math.min(helper(0), helper(1))
};