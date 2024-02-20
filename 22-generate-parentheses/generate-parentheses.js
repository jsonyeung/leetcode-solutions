/**
 * @param {number} n
 * @return {string[]}
 */
/*

stack = []
results = []

function helper(l = 0, r = 0) {
    if (stack is empty) push('(')

    if (l or r is > n) return
    if (r > l) return

    if (l === r === n) 
        push to results
        return

    push('(')
    helper(l + 1, r)
    pop('(')

    push(')')
    helper(l, r + 1)
    pop(')')
}


*/

var generateParenthesis = function(n) {
    let stack = []
    let results = []

    function helper(leftBrackets, rightBrackets) {
        if (leftBrackets > n || rightBrackets > n) {
            return
        }

        if (rightBrackets > leftBrackets) {
            return
        }

        if (rightBrackets == leftBrackets && leftBrackets == n) {
            results.push(stack.join(''))
            return
        }

        stack.push('(')
        helper(leftBrackets + 1, rightBrackets)
        stack.pop()

        stack.push(')')
        helper(leftBrackets, rightBrackets + 1)
        stack.pop()
    }

    stack.push('(')
    helper(1, 0)
    return results
};