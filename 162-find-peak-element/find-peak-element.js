/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0

    function helper(left, right) {
        let mid = Math.floor((right - left) / 2) + left

        let prev = nums[mid - 1] ?? -Infinity
        let next = nums[mid + 1] ?? -Infinity

        console.log(prev, mid, next)

        if (nums[mid] > prev && nums[mid] > next) {
            return mid
        }

        if (nums[mid] < next) {
            return helper(mid + 1, right)
        } else {
            return helper(left, mid - 1)
        }
    }

    return helper(0, nums.length - 1)
};
/*

increasing on one side - check right

 /
 |
/


both below mid 

 /|\
/   \

decreasing on one side -> check left

\
 |
 \

mid on left or right (either side is ok)
   v 
_  _
 \/ \
 */