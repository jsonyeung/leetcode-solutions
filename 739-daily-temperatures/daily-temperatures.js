/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    let results = []
    
    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i]

        while (stack.length && stack[stack.length - 1][0] < temp) {
            let prevIndex = stack.pop()[1]
            results[prevIndex] = (i - prevIndex)
        }

        stack.push([temp, i])
    }

    // push remaining as 0
    while (stack.length > 0) {
        let [_, prevIndex] = stack.pop()
        results[prevIndex] = 0
    }

    return results
};