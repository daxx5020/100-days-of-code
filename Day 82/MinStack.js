// Design a min stack

/*
    Bruteforce solution
*/

var MinStack = function() {
    // Initialize an empty stack to store pairs of (value, minSoFar)
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    // Determine the current minimum value
    let min = this.stack.length === 0 ? val : Math.min(this.stack[this.stack.length - 1][1], val);
    // Push the pair (val, min) onto the stack
    this.stack.push([val, min]);
};

MinStack.prototype.pop = function() {
    // Remove the top element from the stack
    this.stack.pop();
};

MinStack.prototype.top = function() {
    // Return the value part of the top element
    return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function() {
    // Return the min part of the top element
    return this.stack[this.stack.length - 1][1];
};


/*
    Optimal solution
*/


var MinStack = function() {
    this.stack = []; // Array to simulate the stack
    this.min = Infinity; // Variable to keep track of the minimum value
};

MinStack.prototype.push = function(val) {
    // If the stack is empty, set the current value as the minimum and push it
    if (this.stack.length === 0) {
        this.min = val;
        this.stack.push(val);
    } else {
        // If the new value is less than the current minimum
        if (val < this.min) {
            // Push a modified value onto the stack (encoding the previous minimum)
            this.stack.push(2 * val - this.min);
            // Update the minimum to the new value
            this.min = val;
        } else {
            // Push the actual value onto the stack
            this.stack.push(val);
        }
    }
};

MinStack.prototype.pop = function() {
    // Remove the top element from the stack
    let topElement = this.stack.pop();
    
    // If the popped element is less than the current minimum, we decode the previous minimum
    if (topElement < this.min) {
        this.min = 2 * this.min - topElement;
    }
};

MinStack.prototype.top = function() {
    let topElement = this.stack[this.stack.length - 1];
    
    // If the top element is less than the current minimum, it means the actual top is the current minimum
    if (topElement < this.min) {
        return this.min;
    } else {
        return topElement;
    }
};

MinStack.prototype.getMin = function() {
    return this.min;
};