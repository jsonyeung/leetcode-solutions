/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {}
    let stack = []

    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            map[stack.pop()] = num
        }

        stack.push(num)
    }

    return nums1.map((value) => {
        return map[value] ?? -1
    })
};