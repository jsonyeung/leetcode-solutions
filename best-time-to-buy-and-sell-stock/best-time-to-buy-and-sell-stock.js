/**
 * @param {number[]} prices
 * @return {number}
 */
 /*


[1, 2, 3, 4, 5] = 5 - 1 = 4
[1, 5, 2, 8] = 7, 8 - 1 = 7

[3, 2, 1] = 0, descending

Approach 1:
loop through every pair to find minimum

O(n^2)
O(1)

Approach 2:
Keep track of minimum and maxScore

O(n^2)
O(1)

min = 1
min = 1, max = 5 - 1 = 4
min = 1, max = 4 (2 - 1 = 2 < 4)
min = 1, max 7 (8 - 1 = 7 > 4)

[2, 1, 3, 4]

min = 2
min = 1, max = 1 (2 - 1 = 1)
min = 1, max = 2 (3 - 1 = 2)
min = 1, max = 3 (4 - 1 = 3)


 */
var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0

    for (let i = 1; i < prices.length; i++) {
        const diff = prices[i] - min
        max = Math.max(max, diff)
        min = Math.min(min, prices[i])
    }

    return max
};