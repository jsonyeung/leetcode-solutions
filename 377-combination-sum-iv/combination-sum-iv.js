/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let memo = {}

    function helper(i = 0, sum = 0) {
        let key = `${i}_${sum}`

        if (i >= nums.length || sum > target) {
            return 0
        }

        if (sum === target) {
            return 1
        }

        if (memo[key] != null) {
            return memo[key]
        }

        let count = 0

        for (let j = 0; j < nums.length; j++) {
            count += helper(j, sum + nums[j])
        }

        return memo[key] = count
    }

    return helper()
};