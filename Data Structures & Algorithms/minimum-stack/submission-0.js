class MinStack {
    constructor() {
        this.minStack = [];
        this.mins = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.minStack.push(val);
        if (this.mins.length === 0) {
            this.mins.push(val);
        } else {
            this.mins.push(Math.min(this.mins[this.mins.length - 1], val));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        this.mins.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.minStack[this.minStack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.mins[this.mins.length - 1];
    }
}
