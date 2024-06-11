/**
 * @param {number[]} nums
 * @return {number}
 */
 /*

 [10 -100 99] // [99]
 [99 -100 10] // [99]
 [100 -100 101] // [100 -100 101]
 [-10 100 -100 101 -10] // [100 -100 101]

 */
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let runningSum = 0

    for (let num of nums) {
        runningSum += num
        maxSum = Math.max(maxSum, runningSum)

        if (runningSum < 0) {
            runningSum = 0
        }
    }

    return maxSum
};