/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let set = new Set()

    for (let i = 0; i < target.length; i++) {
        for (let triplet of triplets) {
            if (triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) {
                continue                
            }

            if (triplet[i] === target[i]) {
                set.add(i)
            }
        }
    }

    return (set.size === 3)
};