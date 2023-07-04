/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// https://www.youtube.com/watch?v=YUF3_eBdzsk
var splitArray = function(nums, k) {
    let l = Math.max(...nums)
    let r = nums.reduce((acc, v) => acc + v, 0)
    let res = r

    function canSplit(largest) {
        let subarray = 0
        let curSum = 0

        for (let n of nums) {
            curSum += n

            if (curSum > largest) {
                subarray += 1
                curSum = n
            }
        }

        return (subarray + 1 <= k)
    }

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2)

        if (canSplit(mid)) {
            res = mid
            r = mid - 1

        } else {
            l = mid + 1
        }
    }

    return res
};