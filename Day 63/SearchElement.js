// Search element in linked list

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
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

    head = searchElement(head, val, 2);
    console.log(head);
}

main();