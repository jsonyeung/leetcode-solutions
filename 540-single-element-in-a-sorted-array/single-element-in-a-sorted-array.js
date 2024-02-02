/**
 * @param {number[]} nums
 * @return {number}
 */
 /*

    pivot = Math.floor((right - left) / 2) + left

    for pivot,
        if left and right sides are not = pivot return pivot

        recursively check the side with odd number of remaining elements

 */
var singleNonDuplicate = function(nums) {
    let left = 0, right = (nums.length - 1)

    while (left <= right) {
        let pivot = Math.floor((right - left) / 2) + left
        let pivotLeft = (pivot - 1)
        let pivotRight = (pivot + 1)

        let isSingular = (nums[pivot] !== nums[pivotLeft]) && (nums[pivot] !== nums[pivotRight])
        if (isSingular) return nums[pivot]

        if (nums[pivot] === nums[pivotLeft]) {
            pivotLeft = pivotLeft - 1

        } else if (nums[pivot] === nums[pivotRight]) { 
            pivotRight = pivotRight + 1
        }

        if (pivotLeft < 0 || (pivotLeft + 1) % 2 === 0) left = pivotRight
        else right = pivotLeft        
    }
    
    // assumes an answer always exists
};