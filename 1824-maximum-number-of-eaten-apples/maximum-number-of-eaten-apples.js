/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */

/*

minheap = []

for each day i
    push ([# of apples, i + days[i]]) into minheap

    pop element from minheap
        if element's days not expired, then eat 1 apple
            push back into minheap
        else
            pop again and repeat the loop

    if no elements from minheap, do nothing


*/


var eatenApples = function(apples, days) {
    let minheap = new PriorityQueue({ compare: ([_, a], [__, b]) => a - b });
    
    let day = 1
    let maxApplesEaten = 0

    while (day <= days.length || !minheap.isEmpty()) {

        if (day <= days.length) {
            let i = day - 1
            minheap.enqueue([apples[i], day + days[i]])
        }

        while (!minheap.isEmpty()) {
            let [apples, expiry_day] = minheap.front()
            minheap.dequeue()

            if (expiry_day > day) {
                maxApplesEaten++
                if (apples - 1 > 0) {
                    minheap.enqueue([apples - 1, expiry_day])
                }
                break
            }
        }

        day++
    }

    return maxApplesEaten
};