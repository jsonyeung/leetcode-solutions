/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let idxMap = {}

    for (let i = 0; i < nums.length; i++) {
        let key = (target - nums[i])

        if (idxMap[key] != null && idxMap[key] !== i) {
            return [i, idxMap[key]]

        } else {
            idxMap[nums[i]] = i
        }
    }
};