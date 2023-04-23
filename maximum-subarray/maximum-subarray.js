/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let current = 0
    let maxValue = -Infinity

    for (let i = 0; i < nums.length; i++) {
        current += nums[i]

        if (current > maxValue) {
            maxValue = current
        }

        if (current < 0) {
            current = 0
        }
    }

    return maxValue
};