/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo = {}

    function helper(i = 0) {
        if (i >= nums.length) {
            return 0
        }

        if (memo[i] != null) {
            return memo[i]
        }

        memo[i] = Math.max(
            nums[i] + helper(i+2),
            helper(i+1)
        )

        return memo[i]
    }

    return helper()
};