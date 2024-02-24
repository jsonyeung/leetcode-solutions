/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // n = 1 has 1 -> 1 step
    // n = 2 has 2 -> 1 + 1 or 2 steps
    let memo = { 1: 1, 2: 2 }

    for (let i = 3; i <= n; i++) {
        // step 3 would be the optimal of having taken 1 step from the previous
        // and having taken 2 steps from the previous step
        memo[i] = memo[i - 1] + memo[i - 2]
    }

    return memo[n]
};


/*
   
    1      2
   / \ 
  2   3  


from level = 0

pick 1 or 2 steps
    recursively repeat from 1 or 2 steps
        if total steps > n
            return

        if total steps === n
            add 1 to total


memo = []

[
    1: 1
    2: 2
    3: 
]

memo = {
    1: 1
    2: 2
    3: 3
    4: 5
}

for i = 3 to n
    memo[i] = memo[i - 1] + memo[i - 2]


*/