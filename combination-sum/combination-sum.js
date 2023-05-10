/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let dp = []

    // initialize dp
    dp[0] = [[]]
    for (let i = 1; i <= target; i++) dp[i] = []

    // outer loop should be candidates so that the combination only gets added once (e.g. 2 + 3 = 5 and 3 + 2 = 5)
    for (let c of candidates) { 
        for (let t = 1; t <= target; t++) {
            let diff = t - c
            if (diff < 0) continue

            dp[diff].forEach((combo) => {
                dp[t].push([c, ...combo])
            })
        }
    }

    return dp[target]
};