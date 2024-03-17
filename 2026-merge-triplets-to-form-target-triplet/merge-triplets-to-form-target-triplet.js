/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    
    /* 
        has number = set()
        for each number in target
            for eahc in triplet
                if triplet contains value > target value,
                    ignore it and continue

                if number === in triplet
                    add index to set
                
                if number <= triplet
                    push to remaining triplets
        
        return true if set has 3 indices
    */

    let hasNumber = new Set()

    for (let i = 0; i < target.length; i++) {
        let remainingTriplets = []

        for (let triplet of triplets) {
            if (triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) {
                continue
            }

            if (triplet[i] === target[i]) {
                hasNumber.add(i)
            }

            if (triplet[i] <= target[i]) {
                remainingTriplets.push(triplet)
            }
        }
    }

    return (hasNumber.size === 3)
};