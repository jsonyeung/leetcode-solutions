/**
 * @param {string[]} tokens
 * @return {number}
 */
 /*

Assumption:
- input will always follow valid Reverse Polish Notation

[1 2 +]
= 1 + 2 = 3

[1 2 3 + *]
= 1 * (2 + 3) = 5

[1 2 + 3 *]
= (1 + 2) * 3

[10]
= 10

Approach:
- Keep a stack of numbers, once an operator is reached, pull the last two numbers and push back the results

stack = []

for each element in tokens
  if element is a number, push into stack
  else if element is an operator
    pull last two numbers and apply operator
    push back into stack

return last element of stack

 */
var evalRPN = function(tokens) {
  let stack = []

  let operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,

    // we need to ceil when quotient is negative to truncate up towards 0 
    // (e.g. -6 / 132 = -0.04)
    // (floor(-0.04) = -1, ceil(-0.04) = 0)
    '/': (a, b) => (a / b >= 0) ? Math.floor(a / b) : Math.ceil(a / b),
  }

  function isOperator(token) {
    return !!operators[token]
  }

  function eval(a, b, op) {
    return operators[op](a, b)
  }

  for (let token of tokens) {
    if (isOperator(token)) {
      let opB = stack.pop()
      let opA = stack.pop()
      stack.push(eval(opA, opB, token))

      console.log(opA + token + opB + '=' + eval(opA, opB, token))

    } else {
      stack.push(parseInt(token))
    }
  }

  return Math.floor(stack.pop())
};