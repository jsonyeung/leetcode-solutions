/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 /*

    PAYPALIS = PIALSYAP


stacks = 
    [PI]
    [ALS]
    [YA]
    [P]

    let pointer = 0
    let dir = up or down

    for each character of string, i
        push character into stacks[i]

        if pointer is end of stacks then dir = up
        if pointer is start of stacks then dir = down

        if (dir is up) pointer++
        else pointer--

    return joined stack as string


 */
var convert = function(s, numRows) {
    if (numRows === 1) return s

    let stacks = Array.from({ length: numRows }, () => [])

    let pointer = 0, dir = 'down'
    for (let char of s) {
        stacks[pointer].push(char)

        if (pointer === 0) dir = 'down'
        if (pointer === stacks.length - 1) dir = 'up'

        pointer += (dir === 'up') ? -1 : 1
    }

    return stacks.flat().join('')
};