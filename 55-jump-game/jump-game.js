/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let memo = {}

    function traverse(i = 0) {
        if (i === (nums.length - 1)) {
            return true
        }

        if (i > (nums.length - 1)) {
            return false
        }

        if (memo[i] != null) {
            return memo[i]
        }

        for (let j = 1; j <= nums[i]; j++) {
            if (traverse(i + j)) {
                return memo[i] = true
            }
        }

        return memo[i] = false
    }

    return traverse()
};