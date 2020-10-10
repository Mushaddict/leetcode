/**
 * initialize your data structure here.
 */
const MinStack = function () {
    this.stack = [];
    this.minStack = [];
}

/** 
 * @param {number} element
 * @return {void}
 */
MinStack.prototype.push = function(element) {
    this.stack.push(element);
    if (this.minStack.length == 0 || x <= this.minStack[this.minStack.length - 1]) {
        //只能放进一个比minStack最后一项小的数
        this.minStack.push(element);
    }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const pop = this.stack.pop();
    if (pop !== void 0 && pop === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minStack[this.minStack.length - 1];
}

MinStack.prototype.print = function () {
    console.log(this.minStack.toString());
}


// Your MinStack object will be instantiated and called as such:
 var obj = new MinStack()
 obj.push("x")
 obj.print()
 obj.pop()
 var param_3 = obj.top()
 var param_4 = obj.min()
 obj.print()
 