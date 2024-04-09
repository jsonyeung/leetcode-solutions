/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []

    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => ((a / b) < 0) ? Math.ceil(a / b) : Math.floor(a / b)
    }

    for (let token of tokens) {
        console.log(stack)
        
        if (operations[token]) {
            let b = stack.pop()
            let a = stack.pop()
            stack.push(operations[token](a, b))

        } else {
            stack.push(Number(token))
        }
    }

    return stack[0]
};