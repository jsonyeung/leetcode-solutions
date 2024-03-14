/**
 * @param {number[]} nums
 * @return {number}
 */
 /*

 [-10 300 -300 400]
 [-10 300 -200 400]

 expansion
    keep expanding until the sum in subarray is <= 0 or end of array


 contraction
    keep contracting until last element is positive or sum > 0 or subarray is size 1


 */
var maxSubArray = function(nums) {
    let left = 0
    let right = 0

    let maxSum = -Infinity
    let sum = 0

    while (right < nums.length) {
        sum += nums[right]
        maxSum = Math.max(maxSum, sum)
        right++

        while ((sum <= 0 || nums[left] < 0) && (right - left) > 1) {
            sum -= nums[left]
            maxSum = Math.max(maxSum, sum)
            left++
        }
    }

    return maxSum    
};