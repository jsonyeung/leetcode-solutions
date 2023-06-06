/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0, b = 1

    while (true) {
        yield a

        let temp = a
        a = b
        b = b + temp
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */