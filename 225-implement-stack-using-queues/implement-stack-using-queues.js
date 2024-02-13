
var MyStack = function() {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.unshift(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.empty()) return

    let tempQueue = []

    while (this.queue.length < 1) {
        tempQueue.unshift(
            this.queue.shift()
        )
    }

    const result = this.queue.shift()

    while (tempQueue.length > 0) {
        this.queue.unshift(
            tempQueue.shift()
        )
    }

    return result
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length <= 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */