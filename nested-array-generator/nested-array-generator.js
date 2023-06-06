/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    let stack = [arr]

    while (stack.length > 0) {
        const cur = stack.pop()

        if (Array.isArray(cur)) {
            for (let i = cur.length - 1; i >= 0; i--) {
                stack.push(cur[i])
            }

        } else {
            yield cur
        }
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */