/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const findPivotNumber = () => {
        if (nums.length === 1) {
            return nums[0]
        }

        let l = 0, r = (nums.length - 1)

        while (l < r) {
            let mid = l + Math.floor((r - l) / 2)

            // check if pivot exists near mid
            if (nums[mid + 1] < nums[mid]) {
                return nums[mid + 1]
            } else if (nums[mid] < nums[mid - 1]) {
                return nums[mid]
            } 

            // if not pivot exists in current mid, 
            // move left or right relative to the first value
            if (nums[mid] > nums[0]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return nums[0]
    }

    return findPivotNumber(nums)
};