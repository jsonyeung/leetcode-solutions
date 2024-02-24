/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, n) => acc + n, 0)
    let memo = {}

    if (sum % 2 !== 0) return false

    function helper(i, target) {
        if (i >= nums.length) {
            return false
        }

        if (target < 0) {
            return false
        }

        if (target === 0) {
            return true
        }

        let key = `${i}_${target}`
        if (memo[key] != null) {
            return memo[key]
        }

        memo[key] = helper(i + 1, target - nums[i]) || helper(i + 1, target)
        return memo[key]
    }

    return helper(0, sum / 2)
};