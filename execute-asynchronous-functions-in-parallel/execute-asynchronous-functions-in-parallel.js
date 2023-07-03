/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        let results = []
        let remaining = functions.length

        for (let i = 0; i < functions.length; i++) {
            const promise = functions[i]

            promise()
                .then((result) => {
                    results[i] = result
                    remaining -= 1

                    if (remaining <= 0) {
                        resolve(results)
                    }
                })
                .catch((err) => {
                    reject(err)
                }) 
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */