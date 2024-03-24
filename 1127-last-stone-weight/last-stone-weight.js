/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones = stones.sort((a, b) => b - a)

    console.log(stones)
    while (stones.length > 1) {
        let stoneA = stones.shift()
        let stoneB = stones.shift()
        console.log(stoneA, stoneB, stones)

        if (stoneA !== stoneB) {
            stones.push(stoneA - stoneB)
            stones = stones.sort((a, b) => b - a)
        }
    }

    return stones.pop() || 0
};