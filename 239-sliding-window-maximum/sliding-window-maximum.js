/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let queue = []

    function pushDecreasing(value) {
        while (queue.length > 0 && queue[queue.length - 1] < value) {
            queue.pop()
        }
        queue.push(value)
    }

    for (let i = 0; i < k; i++) {
        pushDecreasing(nums[i])
    }

    let start = 0
    let end = k - 1

    let results = []

    while (end < nums.length) {
        // console.log(queue)
        results.push(queue[0])

        if (nums[start] === queue[0]) {
            queue.shift()
        }

        pushDecreasing(nums[end + 1])
        start++; end++
    }

    return results
};