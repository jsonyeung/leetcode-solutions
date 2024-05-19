/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0
    let end = (nums.length - 1)

    while (start !== end) {
        let mid = Math.floor((end - start) / 2) + start

        if (nums[mid] > nums[end]) {
            start = mid + 1
        } else {
            end = mid
        }
    }

    return nums[start]
};