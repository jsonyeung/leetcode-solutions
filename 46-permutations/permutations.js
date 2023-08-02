/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const results = []

    function dfs(sub = [], used = []) {
        if (sub.length >= nums.length) {
            results.push([...sub])
        }

        for (let j = 0; j < nums.length; j++) {
            if (used[j]) continue
            
            sub.push(nums[j])
            used[j] = true
            
            dfs(sub, used)
            sub.pop()
            used[j] = false
        }
    }

    dfs()
    return results
};