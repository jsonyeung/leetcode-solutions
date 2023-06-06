/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums = []) {
    this.array = nums
};

ArrayWrapper.prototype.valueOf = function() {
    return this.array.reduce((acc, v) => acc + v, 0)
}

ArrayWrapper.prototype.toString = function() {
    let string = ''
    for (let i = 0; i < this.array.length; i++) {
        string += this.array[i]
        if (i < (this.array.length - 1)) string += ','
    }

    return '[' + string + ']'
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */