/**
 * @param {number[]} nums
 * @return {number}
 */
 /*

 for each house:
    1. rob house, skip house
    2. skip house

if no more houses to rob, return amount of money stolen
for all given possible paths, return the one with the most robbed house
 */
var rob = function(nums) {
    const memo = {}

    function helper(i = 0) {
        if (memo[i] != null) return memo[i]
        if (i >= nums.length) return 0

        memo[i] = Math.max(
            nums[i] + helper(i + 2),
            helper(i + 1)
        )
        return memo[i]
    }

    return helper()
};