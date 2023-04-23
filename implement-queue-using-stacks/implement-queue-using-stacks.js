
var MyQueue = function() {
    this.main = []
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.empty()) this.peeked = x
    this.main.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.main.length > 0) {
        this.stack.push(this.main.pop())
    }

    let dequeued = this.stack.pop()

    // reassign peeked
    this.peeked = this.stack[this.stack.length - 1]

    while (this.stack.length > 0) {
        this.main.push(this.stack.pop())
    }

    return dequeued
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.peeked
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.main.length <= 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */