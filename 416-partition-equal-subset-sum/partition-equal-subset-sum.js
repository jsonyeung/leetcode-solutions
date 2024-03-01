/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total = nums.reduce((acc, val) => acc + val, 0)
    let memo = {}

    if (total % 2 !== 0) {
        return false
    }

    function helper(i = 0, target) {
        let key = `${i}_${target}`

        if (target === 0) {
            return true
        }

        if (target < 0) {
            return false
        }

        if (i >= nums.length) {
            return false
        }

        if (memo[key] != null) {
            return memo[key]
        }

        memo[key] = helper(i + 1, target - nums[i]) || helper(i + 1, target)
        return memo[key]
    }

    return helper(0, total / 2)
};