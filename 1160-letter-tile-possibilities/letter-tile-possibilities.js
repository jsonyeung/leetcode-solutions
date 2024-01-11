/**
 * @param {string} tiles
 * @return {number}
 */
 /*

 AAA

 [A AA AAA]

let results = []

start with a single tile from tiles
    for each remaining tile

        if (combination doesn't exists) put in result
        recursively check with combination
        remove the remaining tile

 */
var numTilePossibilities = function(tiles) {
    let allTiles = tiles.split('')
    if (allTiles.length <= 1) return allTiles.length

    let combos = new Set()

    function evaluate(combo, remaining) {
        if (combo && !combos.has(combo)) combos.add(combo)
        if (remaining.length <= 0) return

        for (let i = 0; i < remaining.length; i++) {
            let tile = remaining[i]
            let newRemaining = remaining.slice()

            newRemaining.splice(i, 1)
            evaluate(combo + tile, newRemaining)
        }
    }

    evaluate('', allTiles)
    return combos.size
};