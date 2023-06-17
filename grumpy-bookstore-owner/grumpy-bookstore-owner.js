/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let start = 0
    let max = 0
    
    let total = 0
    let grumpyTotal = 0

    for (let i = 0; i < customers.length; i++) {
        // add current value to sliding window
        total += (grumpy[i] === 0) ? customers[i] : 0
        grumpyTotal += (grumpy[i] === 1) ? customers[i] : 0

        // slide start forward once we get a sub array length > minutes
        if ((i - start + 1) > minutes) {
            if (grumpy[start] === 1) {
                grumpyTotal -= customers[start]
            }
            start++
        }

        // track max possible grumpy total
        max = Math.max(max, grumpyTotal)
    }

    return total + max
};