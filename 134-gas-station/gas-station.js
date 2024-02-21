/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let runningSum = 0
    let totalRunningSum = 0
    let startingStation = 0

    for (let i = 0; i < gas.length; i++) {
        runningSum += gas[i] - cost[i]
        totalRunningSum += gas[i] - cost[i]

        if (runningSum < 0) {
            runningSum = 0
            startingStation = i + 1
        }
    }

    if (totalRunningSum < 0) return -1
    return startingStation
};