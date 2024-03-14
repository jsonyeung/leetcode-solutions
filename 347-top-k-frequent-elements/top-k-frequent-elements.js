/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    let bucket = new Array(nums.length + 1)
        .fill(null)
        .map(() => [])

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1
    }

    for (let [key, value] of Object.entries(map)) {
        bucket[value].push(key)
    }

    let results = []

    for (let i = (bucket.length - 1); i >= 0; i--) {
        if (results.length >= k) break

        while (results.length < k && bucket[i].length > 0) {
            results.push(bucket[i].pop())
        }
    }

    return results
};