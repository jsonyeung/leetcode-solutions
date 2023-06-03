/**
 * @param {Array} arr
 * @return {Matrix}
 */
/*

flatten the array objs

e.g.
{a: {b: 1, c: 2}} = {a.b: 1, a.c: 2}

loop through each object and get a union of the keys
sort the union in ascending order

results = []

push union key into results as a row

for each object, create a row of values for each key
  for each key, value in object
    row[key] = value

  push row to results

*/
function flatten(obj) {
  let result = {}

  function dfs(key, value) {
    if (value == null || typeof value !== 'object') {
      result[key] = value

    } else {
      for (let sub of Object.keys(value)) {
        dfs(`${key}.${sub}`, value[sub])
      }
    }
  }

  for (let key in obj) {
    dfs(key, obj[key])
  }

  return result
}

// console.log(flatten({a: 1, b: 2}))
// console.log(flatten({a: {c: {d: 1, b: 2}}, b: 2}))
// console.log(flatten([{"a": null}]))

var jsonToMatrix = function(arr) {
  const flattened = arr.map(flatten)

  let keys = new Set()

  for (const obj of flattened) {
    for (const key in obj) {
      keys.add(key)
    }
  }

  keys = [...keys].sort()

  const results = Array.from(new Array(arr.length + 1), () => (new Array(keys.length)).fill(""))
  results[0] = keys

  const orderedMap = keys.reduce((acc, val, i) => {
    acc[val] = i
    return acc
  }, {})

  for (let i = 0; i < flattened.length; i++) {
    for (const key in flattened[i]) {
      results[i+1][orderedMap[key]] = flattened[i][key]
    }
  }

  return results
};