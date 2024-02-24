/**
 * @param {number[]} cost
 * @return {number}
 */
 /*


 [2, 1, 4, 5, 0]

memo = {
    0: 2
    1: 1
    3: 5
    4: 6
    5: 5
}

memo[step] = Math.min(1000 + 1, 1000 + 10)

step = 1


 cost = 1           step = 1
      /    \
    11    1000      step = 2
  /  \     /   \ 
1011 15  1005 1000   step = 3
/  \ 
1016 1011
 */


var minCostClimbingStairs = function(cost) {
    let costs = [...cost, 0]
    let memo = { 0: cost[0], 1: cost[1] }
    let step = 2

    while (step < costs.length) {
        memo[step] = Math.min(
            costs[step] + memo[step - 1], 
            costs[step] + memo[step - 2]
        )
        step++
    }

    return memo[costs.length - 1]
};