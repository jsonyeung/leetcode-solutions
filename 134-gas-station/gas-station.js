/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let startingStation = 0
    let runningSum = 0

    let totalGas = 0
    let totalCost = 0

    for (let i = 0; i < gas.length; i++) {
        runningSum += gas[i] - cost[i]

        totalGas += gas[i]
        totalCost += cost[i]

        if (runningSum < 0) {
            runningSum = 0
            startingStation = i + 1
        }
    }

    if (totalGas < totalCost) {
        return -1
    }

    return startingStation
};