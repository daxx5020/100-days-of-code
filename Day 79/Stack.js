// *** Stack ***

/*
    Implement stack using arrays
*/

class Stack {
    constructor() {
        this.top = -1;

        this.size = 1000;

        this.arr = new Array(this.size).fill(0);
    }

    push(x) {
        // Increment the top pointer to indicate the new top position
        this.top += 1;

        // Place the new element at the top position in the array
        this.arr[this.top] = x;
    }

    pop() {
        
        if (this.top === -1) {
            return -1; // Return -1 if the stack is empty
        }

        // Retrieve the element at the top of the stack
        let x = this.arr[this.top];

        // Decrement the top pointer to remove the top element
        this.top -= 1;

        return x;
    }

    Top() {
        return this.arr[this.top];
    }

    Size() {
        return this.top + 1;
    }
}

const s = new Stack();
s.push(6);
s.push(3);
s.push(7);

console.log("Top of stack before deleting any element:", s.Top());
console.log("Size of stack before deleting any element:", s.Size());

console.log("The element deleted is:", s.pop());
console.log("Size of stack after deleting an element:", s.Size());
console.log("Top of stack after deleting an element:", s.Top());
