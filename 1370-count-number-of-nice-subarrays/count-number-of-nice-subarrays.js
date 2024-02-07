/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 /*

 [1, 1, 0, 1, 1]

 left = [0, 1, 2, 2, 3, 4]
 right = [4, 3, 2, 2, 1, 0]

 */
var numberOfSubarrays = function(nums, k) {
    let arr = nums.map((v) => v % 2 === 0 ? 0 : 1)
    let prefixSum = 0, count = 0, map = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (map.has(prefixSum)) {
            map.set(prefixSum, map.get(prefixSum) + 1)
        } else {
            map.set(prefixSum, 1)
        }

        prefixSum += arr[i]

        if (map.has(prefixSum - k)) {
            count = count + map.get(prefixSum - k)
        }
    }

    return count
};