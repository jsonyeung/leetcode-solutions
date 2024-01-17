/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 /*

 {
     1: 3
     2: 2
     3: 1
 }

 1, 2

 */
var topKFrequent = function(nums, k) {
    let map = {}
    nums.forEach((num) => {
        map[num] = (map[num] || 0) + 1
    })

    let entries = Object.entries(map)
        .sort(([numA, freqA], [numB, freqB]) => freqB - freqA)
        .map(([key]) => key)
    
    return entries.slice(0, k)
};