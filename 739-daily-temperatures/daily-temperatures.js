/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

/*

[30] => [0]
[35, 36, 37] => [1, 1, 0]


Find the peaks of the mountains
    for each peak, move backwards

*/
var dailyTemperatures = function(temperatures) {
    let results = Array.from({ length: temperatures.length }, () => 0)
    let stack = [] // [temp, i]

    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i]

        while (stack.length > 0) {
            let [lastTemp, lastI] = stack[stack.length - 1]

            if (temp > lastTemp) {
                results[lastI] = (i - lastI)
                stack.pop()
            } else {
                break
            }
        }

        stack.push([temp, i])
    }

    return results    
};