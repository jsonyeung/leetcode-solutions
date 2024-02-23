/**
 * @param {number[]} stones
 * @return {number}
 */
 /*

 [1]

 init and push elements into heap


 while (heap.size is > 1) {
     pop two elements off, smash them

     if smashed diff is 0 do nothing
     else push back into heap
 }

 if (heap.size is 1) return heap.pop

 else return 0
 
time: O(n logn)
space: O(n)

 */
var lastStoneWeight = function(stones) {
    const maxQueue = new MaxPriorityQueue();
    stones.forEach((stone) => maxQueue.enqueue(stone))

    while (maxQueue.size() > 1) {
        let stoneA = maxQueue.dequeue().element
        let stoneB = maxQueue.dequeue().element
        let diff = (stoneA - stoneB)

        if (diff !== 0) {
            maxQueue.enqueue(diff)
        }
    }

    return (maxQueue.size() === 1) ? maxQueue.dequeue().element : 0
};