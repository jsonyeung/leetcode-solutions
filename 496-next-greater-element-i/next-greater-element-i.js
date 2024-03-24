/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [nums2[0]]
    let map = {}

    for (let i = 1; i < nums2.length; i++) {
        while (stack.length && nums2[i] > stack[stack.length - 1]) {
            map[stack.pop()] = nums2[i]
        }

        stack.push(nums2[i])
    }

    return nums1.map((value) => map[value] ?? -1)
};