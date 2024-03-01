/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    if (temperatures.length <= 0) {
        return 0
    }

    let stack = [[temperatures[0], 0]]
    let results = (new Array(temperatures.length)).fill(0)

    temperatures.forEach((temperature, i) => {
        while (stack.length > 0 && stack[stack.length-1][0] < temperature) {
            let element = stack.pop()

            results[element[1]] = (i - element[1])
        }

        stack.push([temperature, i])
    })

    return results
};