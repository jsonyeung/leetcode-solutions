/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = (nums.length - 1)

    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left

        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    console.log(left, right)

    return nums[left]
}; 