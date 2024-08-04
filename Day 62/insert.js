// Insertion and deletion in linked list


/*
    Insert the element at the head
*/


class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

// Function to print the linked list
const print = function(head){
    while(head != null){
        console.log(head.data + " ");
        head = head.next;
    }
}

//find length of the linked list

const findLength = function(head){
    let count = 0;
    let current = head;

    while (current != null){
        count++;
        current = current.next;
    }

    return count;
}



// Function to insert a new node at the head of the linked list
const insertHead = function(head, val){
    let temp = new Node(val,head);
    return temp; 
}

// Function to insert a new node at the end of the linked list
const insertEnd = function(head, value){
    let newNode = new Node(value);
    if (head === null){
        return newNode;
    }
    let current = head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
    return head;
}




const main = function(){
    let arr = [12, 8, 5, 7];
    let val = 100;

    let head = new Node(arr[0]);
    head.next = new Node(arr[1]);
    head.next.next = new Node(arr[2]);
    head.next.next.next = new Node(arr[3]);

    head = insertEnd(head, val);
    print(head);
}

main();