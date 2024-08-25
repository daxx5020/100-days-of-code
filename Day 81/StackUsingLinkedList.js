// Implement stack using linked list

class StackNode {
    constructor(data) {
        this.data = data; // Store the data
        this.next = null; // Pointer to the next node
    }
}

class MyStack {
    constructor() {
        this.top = null; // Initialize the top of the stack as null
    }

    // Function to push an integer into the stack.
    push(a) {
        // Create a new node with the provided data
        const newNode = new StackNode(a);

        // Point the new node's next to the current top
        newNode.next = this.top;

        // Update the top to be the new node
        this.top = newNode;
    }

    // Function to remove an item from the top of the stack.
    pop() {
        if (this.top === null) {
            return -1; // Return -1 if the stack is empty
        }

        // Get the data from the top node
        const poppedData = this.top.data;

        // Update the top to the next node in the list
        this.top = this.top.next;

        // Return the data from the popped node
        return poppedData;
    }
}