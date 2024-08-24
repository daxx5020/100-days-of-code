// *** Queue ***

/*
    Implement queue using arrays
*/

class MyQueue {
    constructor() {
        // Initialize front and rear pointers
        this.front = 0;
        this.rear = 0;

        this.arr = new Array(100005);
    }

    push(x) {
        // Insert the element at the rear position
        this.arr[this.rear] = x;

        // Increment the rear pointer to the next position
        this.rear += 1;
    }

    pop() {
        // Check if the queue is empty
        if (this.front === this.rear) {
            return -1; // Queue is empty
        }

        // Get the element at the front of the queue
        let x = this.arr[this.front];

        // Increment the front pointer to the next position
        this.front += 1;

        // Return the popped element
        return x;
    }
}
