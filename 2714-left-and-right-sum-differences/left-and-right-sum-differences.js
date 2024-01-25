/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum = 0, rightSum = 0
    let result = []

    for (let i = 0; i < nums.length; i++) {
        rightSum += nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i]
        result[i] = Math.abs(rightSum - leftSum)
        leftSum += nums[i]
    }

    return result
};