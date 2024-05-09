/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let stack = []
    let combinations = []

    function helper(i = 0, results = 0) {
        if (i >= candidates.length) {
            return false
        }

        if (results > target) {
            return false
        }

        if (results === target) {
            return true
        }

        for (let j = i; j < candidates.length; j++) {
            stack.push(candidates[j])
            
            if (helper(j, results + candidates[j])) {
                combinations.push(stack.slice())
            }
            stack.pop()
        }
    }

    helper()
    return combinations
};