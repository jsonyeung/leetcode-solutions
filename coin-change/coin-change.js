/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // bottom-up (start w/ smallest solution, and build upwards)
    let dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let a = 1; a <= amount; a++) {
        for (let c of coins) {
            let diff = a - c

            if (diff >= 0) {
                dp[a] = Math.min(dp[a], 1 + dp[diff])
            }
        }
    }

    return (dp[amount] === Infinity) ? -1 : dp[amount]
};