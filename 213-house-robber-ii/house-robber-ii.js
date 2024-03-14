/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length <= 1) {
        return nums[0] || 0
    }

    let memo = {}

    function helper(i, end) {
        if (i >= end) {
            return 0
        }

        let key = `${i}_${end}`

        if (memo[key] != null) {
            return memo[key]
        }

        return memo[key] = Math.max(
            nums[i] + helper(i+2, end),
            helper(i + 1, end)
        )
    }

    return Math.max(
        helper(0, nums.length - 1), // rob first house, making last house unrobbable
        helper(1, nums.length) // skip first house, making last house robbable
    )
};