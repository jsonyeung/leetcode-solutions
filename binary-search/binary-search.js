/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = (nums.length - 1)

    while (start <= end) {
        let mid = Math.floor(((end - start) / 2) + start)

        if (target === nums[mid]) {
            return mid
        }

        if (target > nums[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return -1
};