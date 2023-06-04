/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    if (obj1 === obj2) return {}

    const isNull = (obj1 === null || obj2 === null)
    const isPrimitive = (typeof obj1 !== 'object' || typeof obj2 !== 'object') || (Array.isArray(obj1) !== Array.isArray(obj2))
    if (isNull || isPrimitive) return [obj1, obj2]

    // at this point obj1 and obj2 are either objects or arrays
    const newObj = {}

    for (const key in obj1) {
        if (key in obj2) {
            const diff = objDiff(obj1[key], obj2[key])
            if (Object.keys(diff).length > 0) {
                newObj[key] = diff
            }
        }
    }

    return newObj
};