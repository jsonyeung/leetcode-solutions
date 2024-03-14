/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let runningSum = 0
    let maxSum = -Infinity

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i]
        maxSum = Math.max(maxSum, runningSum)

        if (runningSum < 0) {
            runningSum = 0
        }
    }

    return maxSum
};