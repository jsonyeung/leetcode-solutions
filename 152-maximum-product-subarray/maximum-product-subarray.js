/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let leftProd = 1
    let rightProd = 1
    let result = nums[0]

    for (let i = 0; i < nums.length; i++) {
        // edge case: whenever one side hits 0, set to 1
        leftProd = (leftProd === 0) ? 1 : leftProd
        rightProd = (rightProd === 0) ? 1 : rightProd

        // prefix product
        leftProd *= nums[i]

        // suffix product
        rightProd *= nums[nums.length - i - 1]

        result = Math.max(
            leftProd,
            rightProd,
            result
        )
    }

    return result
};