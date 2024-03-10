/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b)

    let results = new Set()

    for (let i = 0; i < nums.length; i++) {
        let left = i
        let cur = (left + 1)
        let right = (nums.length - 1)

        // avoid duplicates
        if (nums[i-1] === nums[left]) {
            continue
        }

        while (cur < right) {
            let sum = nums[left] + nums[cur] + nums[right]

            if (sum === 0) {
                results.add([nums[left], nums[cur], nums[right]])
                cur++; right--
                
                // avoid duplicates
                while (nums[cur-1] === nums[cur]) cur++
                while (nums[right+1] === nums[right]) right--

            } else if (sum < 0) {
                cur++

            } else {
                right--
            }
        }
    }

    return Array.from(results)
};