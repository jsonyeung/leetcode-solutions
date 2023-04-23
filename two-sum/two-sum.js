/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*

Assumptions:
- can contain negative integers
- must contain a single pair that equals the target


[2, 7, 11, 15], 9

7: 0
2: 1
-2: 2
-6: 3


[3, 3], 6

6 - 3 = 3 : 0
6 - 3 = 3 : 1

*/

var twoSum = function(nums, target) {
    const mapper = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const complement = (target - num)

        if (mapper.hasOwnProperty(complement)) {
            return [mapper[complement], i]
        }

        mapper[num] = i
    }
};