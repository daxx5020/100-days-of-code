/*
    Insert in the linked list
*/


class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

const print = function(head){
    while(head != null){
        console.log(head.data + " ");
        head = head.next;
    }
}


/*
    Insert at the head in the linked list
*/

const insertAtStart = function (head,value){
    let newNode = new Node(value);
    newNode.next = head;
    return newNode;
}

/*
    Insert at the tail in the linked list
*/

const insertAtEnd = function (head,value){
    let newNode = new Node(value);
    if (head === null){
        return newNode;
    }
    let current = head;
    while(current.next != null){
        current = current.next;
    }
    current.next = newNode;
    return head;
}

/*
    Insert at k place in the linked list
*/

const insertAtKPlace = function (head,value,k){
    let newNode = new Node(value);

    if (k === 0){
        newNode.next = head;
        return newNode;
    }

    let current = head;
    let  count = 0;

    while (current !== null && count < k - 1){
        current = current.next;
        count++;
    } 

    if (current === null){
        console.log("Position not found");
        return head;
    }

    newNode.next = current.next;
    current.next = newNode;

    return head;
}


/*
    Search element in the linked list
*/

const searchElement = function (head,value){
    let current = head;
    while (current != null){
        if (current.data === value){
            return true;
        }
        current = current.next;
    }
    return false;
}

const main = function(){
    let arr = [12, 8, 5, 7];
    let val = 100;

    let head = new Node(arr[0]);
    head.next = new Node(arr[1]);
    head.next.next = new Node(arr[2]);
    head.next.next.next = new Node(arr[3]);

    head = insertAtKPlace(head, val, 2);
    print(head);
}

main();