/**
 * @param {string[]} tokens
 * @return {number}
 */

const OPS = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        return (a / b >= 0) ? Math.floor(a / b) : Math.ceil(a / b)
    },
}

var evalRPN = function(tokens) {
    let numbers = []
    
    for (let token of tokens) {
        if (OPS[token] != null) {
            let b = numbers.pop()
            let a = numbers.pop()
            numbers.push(OPS[token](a, b))

        } else {
            numbers.push(parseInt(token))
        }
    }

    return numbers[0]
};