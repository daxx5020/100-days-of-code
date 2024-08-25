// Implement queue using linked list

class QueueNode {
    constructor(data) {
        this.data = data; // Store the data
        this.next = null; // Pointer to the next node
    }
}

class MyQueue {
    constructor() {
        this.front = null;  // Points to the front of the queue
        this.rear = null;   // Points to the rear of the queue
    }

    // Function to push an element into the queue.
    push(x) {
        const newNode = new QueueNode(x); // Create a new node

        // If the queue is empty, both front and rear will point to the new node
        if (this.rear === null) {
            this.front = this.rear = newNode;
            return;
        }

        // If not empty, add the new node at the end of the queue and update rear
        this.rear.next = newNode;
        this.rear = newNode;
    }

    // Function to pop the front element from the queue.
    pop() {
        // If the queue is empty, return -1
        if (this.front === null) {
            return -1;
        }

        // Get the data from the front node
        const poppedData = this.front.data;

        // Move the front pointer to the next node
        this.front = this.front.next;

        // If the front becomes null, the queue is empty, so set rear to null as well
        if (this.front === null) {
            this.rear = null;
        }

        return poppedData;
    }
}