/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
/*

[0 0 0]
[0 1 0]
[0 0 0]
=
[0 0 0]
[0 2 0]
[0 0 0]


[0 0 1]
[1 1 0]
=
[0 0 1]
[2 2 0]



get current flood tile value from [sr][sc]

1. check whether current tile is floodable (aka tile value === [sr][sc])
    2. repeat the check for all 4 directions (if that current tile is floodable)
    else do nothing



*/
var floodFill = function(image, sr, sc, color) {
    let fillTarget = image[sr][sc]
    let map = {}

    function addEntryToMap(r, c) {
        if (map[r] == null) map[r] = {}
        map[r][c] = true
    }

    function flood(r, c) {
        // already checked
        if (map[r] && map[r][c]) return

        // out of bounds
        if ((r >= image.length || r < 0) || (c >= image[0].length || c < 0)) return

        if (image[r][c] === fillTarget) {
            image[r][c] = color
            addEntryToMap(r, c)

            flood(r+1, c)
            flood(r-1, c)
            flood(r, c+1)
            flood(r, c-1)
        }
    }

    flood(sr, sc)
    return image
};