/*
    Implement stack using queue
*/


class MyStack {
    constructor() {
        this.q = []; // Using an array to simulate a queue
    }

    push(x) {
        let s = this.q.length;
        this.q.push(x);

        // Move all previous elements to the back of the queue
        for (let i = 0; i < s; i++) {
            this.q.push(this.q.shift());
        }
    }

    pop() {
        // Remove and return the front element (which is the "top" of the stack)
        return this.q.shift();
    }

    top() {
        // Return the front element without removing it
        return this.q[0];
    }

    empty() {
        // Check if the queue (stack) is empty
        return this.q.length === 0;
    }

    size() {
        // Return the size of the stack
        return this.q.length;
    }
}

