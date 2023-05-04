/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

 /*

[1, 10, 9] 10 = 1

[5, 1, 2] 10 = 2 (5 + 5)

[5, 2] 1 = 0

[1 3 4 5] 7 = 2 (3 + 4)
Can't go greedy bc (5 + 1 + 1) = 3

 */
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let a = 1; a <= amount; a++) {
        for (let c of coins) {
            if ((a - c) < 0) continue

            // dp[a - c] = the optimal # of coins of the remaining amount after taking out c
            // "1 +" = what if we adding this coin to the solution
            dp[a] = Math.min(dp[a], 1 + dp[a - c])
        }
    }

    return (dp[amount] === Infinity) ? -1 : dp[amount]
};