/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    let results = Array.from(temperatures, () => 0)

    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i]

        while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
            let [_, index] = stack.pop()
            results[index] = i - index
        } 

        stack.push([temp, i])
    }

    return results
};