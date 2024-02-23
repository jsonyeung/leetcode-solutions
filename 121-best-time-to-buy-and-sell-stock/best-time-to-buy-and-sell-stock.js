/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxDiff = -Infinity
    let left = 0, right = 1

    while (right < prices.length) {
        let diff = prices[right] - prices[left]
        maxDiff = Math.max(maxDiff, diff)

        if (diff < 0) left = right
        right++
    }

    return (maxDiff < 0) ? 0 : maxDiff
};