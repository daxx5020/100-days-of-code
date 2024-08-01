// Linked list overview


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Equivalent of the main function
const arr = [12, 5, 8, 77];
const y = new Node(arr[0]);

console.log(y.data);