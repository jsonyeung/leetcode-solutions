/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // {
    //     1: 1,
    //     2: 1,
    //     3: (c[3 - 1] = c[2] = 1) + (c[1] = 1) = 2
    //     4: Math.min((c[4 - 1] = c[3] = 2) + (c[1] = 1) = 3 OR (c[4 - 2] = c[2] = 1) + (c[2] = 1) = 2)
    // }

    let dp = { 0: 0 }

    for (let i = 1; i <= amount; i++) {
        dp[i] = Infinity

        for (let coin of coins) {
            if ((i - coin) < 0) continue

            // the reason for + 1 is because we know dp[coin] is esentially just adding a single coin to the count
            dp[i] = Math.min((dp[i - coin] + 1), dp[i]) 
        }
    }

    return (dp[amount] === Infinity) ? -1 : dp[amount]
};