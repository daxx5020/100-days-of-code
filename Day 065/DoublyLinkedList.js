// Doubly linked list


class Node{
    constructor(val, prev = null, next = null){
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

/*
    Covert array to doubly linked list
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
    Insert the value in tail
*/

const insertAtTail = function (head,value){
    if (head === null){
        return new Node(value);
    }

    let current = head;

    while(current.next !== null){
        current = current.next;
    }

    let newNode = new Node(value);
    current.next = newNode;
    newNode.prev = current;

    return head;
}

/*
    Insert the value in head
*/

const insertAtHead = function (head,value){
    let newNode = new Node(value);
    if (head !== null){
        newNode.next = head;
        head.prev = newNode;
    }
    return newNode;
}

/*
    Insert after pth node
*/

const insertAfterPthNode = function(head, p, x){
    let newNode = new Node(x);
    let current = head;

    for (let i = 0; i < p; i++){
        if (current === null){
            throw new Error("Error")
        }
        current = current.next;
    }

    newNode.next = current.next;
    newNode.prev = current;

    if (current.next != null){
        current.next.prev = newNode;
    }
    current.next = newNode;
    return head;
}


/*
    Print the array
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


let arr = [1, 2, 3, 4, 5];
let head = createDoublyLinkedList(arr);

head = insertAfterPthNode(head, 3, 111);

printDoublyLinkedList(head);