/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    let components = formula.match(/[A-Z][a-z]*|[0-9]+|[\(\)]/g)
    let isAtom = /[A-Z][a-z]*/

    let stack = []
    let map = {}

    for (let i = 0; i < components.length; i++) {
        let component = components[i]

        if (component === '(') {
            stack.push('(')

        } else if (component === ')') {
            let mult = Number(components[i + 1]) || 1
            let result = []

            while (stack.length > 0) {
                let popped = stack.pop()

                if (popped === '(') {
                    stack.push(...result)
                    break

                } else {
                    result.push([popped[0], popped[1] * mult])
                }
            }

        } else if (isAtom.test(component)) {
            let atom = component
            let number = 1

            if (!isNaN(components[i + 1])) {
                number = Number(components[i + 1])
                i += 1
            }

            stack.push([atom, number])
        }
    }

    for (let [atom, number] of stack) {
        map[atom] = (map[atom] || 0) + number
    }

    let entries = Object.entries(map)
        .sort(([a, b], [c, d]) => {
            if (a !== c) return a.localeCompare(c);
            else return b - d
        })
        .map(([a, b]) => (b === 1) ? a : [a, b])
        
    return entries.flat().join('')
};

/*

[(, [O, 2], [N, 2], [S, 4], [O, 12] ]



*/