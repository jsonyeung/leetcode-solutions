/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/*

[2 3 6] 6

= [[2 2 2] [3 3] [6]]

[2 2 2] = 2 + dp[4]
[3 3] = 3 + dp[3]
[6] = 6 + dp[0]


[2 3 6 7] 6

dp[0] = [[]]
dp[1] = []
dp[2] = [2 + dp[0] = [2]]
dp[3] = [2 + dp[1] = [], 3 + dp[0] = [3], ]



*/
var combinationSum = function(candidates, target) {
    let dp = []

    // initialize DP
    dp[0] = [[]]
    for (let i = 0; i < target; i++) dp.push([])

    for (let c of candidates) {
        for (let t = 1; t <= target; t++) {
            let diff = t - c
            if (diff < 0) continue

            // when c === t, dp[diff] = dp[0] = [[]]

            dp[diff].forEach((combo) => {
                dp[t].push([...combo, c])
            })
        }
    }
    
    return dp[target]
};