/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalSum = 0

    let runningSum = 0
    let startingStation = 0

    for (let i = 0; i < gas.length; i++) {
        totalSum += (gas[i] - cost[i])
        runningSum += (gas[i] - cost[i])

        if (runningSum < 0) {
            runningSum = 0
            startingStation = i+1
        }
    }

    if (totalSum < 0) {
        return -1
    }

    return startingStation
};