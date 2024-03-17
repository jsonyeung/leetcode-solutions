/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    
    /* 
        has number = true
        for each number in target
            for eahc in triplet
                if number === in triplet
                    set true
                
                if number <= triplet
                    push to remaining triplets
        
            if has number = false
                return false
        
        return true
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