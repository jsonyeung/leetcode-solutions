/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums)
    let results = []

    for (let i = 1; i < nums.length + 1; i++) {
        if (!set.has(i)) {
            results.push(i)
        }
    }

    return results
};