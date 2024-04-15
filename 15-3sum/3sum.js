/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b)

    let results = []

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1
        let right = nums.length - 1

        if (nums[i - 1] === nums[i]) {
            continue
        }

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]])

                while (nums[left] === nums[left + 1]) left++
                while (nums[right] === nums[right - 1]) right--
                left++; right--
            
            } else if (sum < 0) {
                while (nums[left] === nums[left + 1]) left++
                left++

            } else {
                while (nums[right] === nums[right - 1]) right--
                right--
            }
        }
    }

    return results
};