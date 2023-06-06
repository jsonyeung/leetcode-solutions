/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    let results = []

    function dfs(arr) {
        for (let val of arr) {
            if (Array.isArray(val)) dfs(val)
            else results.push(val)
        }
    }

    dfs(arr)
    for (let val of results) {
        yield val
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */