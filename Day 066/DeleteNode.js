// Delete a node in doubly linked list

class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

/*
    Create doubly linked list
*/

const createDoublyLinkedList = function(arr){
    if (arr.length === 0){
        return null;
    }

    let head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++){
        let newNode = new Node(arr[i]);
        current.next = newNode;
        newNode.prev = current;
        current = newNode;
    }

    return head;
}

/*
    Print doubly linked list
*/

const printDoublyLinkedList = function (head){
    let current = head;
    let result = [];
    while (current != null){
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" <-> "));
}

/*
    Delete head node
*/

const deleteHeadNode = function (head){
    if (head === null){
        return null;
    }

    let newHead = head.next;

    if (newHead !== null){
        newHead.prev = null;
    }
    return newHead;
}

/*
    Delete tail node
*/

const deleteTailNode = function (head){
    if (head === null){
        return null;
    }

    if (head.next === null){
        return null;
    }

    let current = head;

    while(current.next !== null){
        current = current.next;
    }

    current.prev.next = null;

    return head;
}

/*
    Delete by position
*/

const deleteNodeAtPosition = function (head,n){
    if (head === null){
        return null;
    }

    if (n === 0){
        let newNode = head.next;
        if (newHead !== null){
            newHead.prev = null;
        }
        return newHead;
    }

    let current = head;

    for(let i = 0; i < n; i++){
        if (current.next === null){
            throw new error("Position exceeds the length of the list");
        }
        current = current.next;
    }

    if (current.next !== null){
        current.next.prev = current.prev;
    }
    if (current.prev !== null){
        current.prev.next = current.next;
    }

    return head;
}

/*
    Reverse the linked list
*/

const reverseLinkedList = function (head){
    if (head === null){
        return null;
    }

    let current = head;
    let temp = null;

    while (current !== null){
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;

        current = current.prev;
    }

    if (temp!== null){
        head = temp.prev;
    }

    return head;
}


let arr = [1, 2, 3, 4, 5];
let head = createDoublyLinkedList(arr);

head = reverseLinkedList(head);

printDoublyLinkedList(head);