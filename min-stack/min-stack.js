/*


[[], [-20], [0], [-30], [pop]]
min = -30 but when popped should be min = -20

idea:
Keep track of the min at the point where value is pushed 
for each pushed value

e.g.
given the stack [-20, 0, -30]

[-20 (min = -20), 0 (min = -20), -30 (min = -30)]

*/

var MinStack = function() {
    this.stack = []
};

MinStack.prototype.size = function() {
    return this.stack.length
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.size() <= 0) {
        this.stack[this.size()] = [val, val] // [val, min]

    } else {
        this.stack[this.size()] = [val, Math.min(val, this.stack[this.size() - 1][1])]
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.size() > 0) {
        this.stack.length -= 1
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.size() - 1]?.[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.size() - 1]?.[1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */