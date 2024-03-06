/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 /*




 */
var maxSlidingWindow = function(nums, k) {
    let queue = []

    function pushDecreasing(value) {
        while (queue.length > 0 && 
               queue[queue.length - 1] < value) {
            queue.pop()
        }
        queue.push(value)
    }

    for (let i = 0; i < k; i++) {
        pushDecreasing(nums[i])
    }

    let results = [queue[0]]

    // console.log(queue)
    for (let i = k; i < nums.length; i++) {
        if (nums[i - k] === queue[0]) {
            queue.shift() // O(1) using doubly LL
        }

        pushDecreasing(nums[i])
        // console.log(queue)
        results.push(queue[0])
    }

    return results
};