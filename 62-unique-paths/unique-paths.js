/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = {}
    let key = (i, j) => `${i}_${j}`

    function traverse(r, c) {
        if (r === (m - 1) && c === (n - 1)) {
            return 1
        }

        if (r >= m || c >= n) {
            return 0
        }

        if (memo[key(r, c)] != null) {
            return memo[key(r, c)]
        }

        memo[key(r, c)] = traverse(r + 1, c) + traverse(r, c + 1)
        return memo[key(r, c)]
    }

    return traverse(0, 0)
};