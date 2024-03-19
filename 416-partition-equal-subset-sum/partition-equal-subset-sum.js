/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total = nums.reduce((acc, val) => acc + val, 0)

    if (total % 2 !== 0) {
        return false
    }
    
    let target = total / 2
    let memo = {}

    function helper(i = 0, target) {
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

        return memo[key] = (
            helper(i+1, target - nums[i]) || helper(i+1, target)
        )
    }

    return helper(0, target)
};