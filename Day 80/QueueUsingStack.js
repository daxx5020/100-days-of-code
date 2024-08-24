/*
    Implement queue using stack
*/

class MyQueue {
    constructor() {
        this.input = [];  // Stack 1
        this.output = []; // Stack 2
    }

    push(x) {
        // Move all elements from input stack to output stack
        while (this.input.length !== 0) {
            this.output.push(this.input.pop());
        }

        // Push the new element into the input stack
        console.log("The element pushed is", x);
        this.input.push(x);

        // Move all elements back to the input stack from output stack
        while (this.output.length !== 0) {
            this.input.push(this.output.pop());
        }
    }

    pop() {
        if (this.input.length === 0) {
            console.log("Queue is empty");
            return null;
        }
        return this.input.pop(); // Remove the front element of the queue
    }

    top() {
        if (this.input.length === 0) {
            console.log("Queue is empty");
            return null;
        }
        return this.input[this.input.length - 1]; // Return the front element
    }

    size() {
        return this.input.length === 0; // Check if the input stack is empty
    }
}