/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const results = {}

    for (let value of this) {
        if (results[fn(value)] == null) {
            results[fn(value)] = []
        }

        results[fn(value)].push(value)
    }

    return results    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */