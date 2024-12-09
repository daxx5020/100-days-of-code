/*
    Delete the element at the linked list
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


const deleteLast = function (head){
    if (head === null){
        return null;
    }
    if (head.next === null){
        return null;
    }
    let current = head;
    while (current.next.next !== null){
        current = current.next;
    }
    current.next = null;
    return head
}

const deleteHead = function (head){
    if (head === null){
        return null;
    }

    return head.next;
}

// delete element from number
const deleteByKPlace = function (head,k){
    if (head === null){
        return head;
    }
    if (k == 1){
        head = head.next;
        return head;
    }
    let cnt = 0;
    let current = head;
    let prev = null;
    while (current != null){
        cnt++;
        if (cnt === k){
            prev.next = prev.next.next;
            break;
        }
        prev = current;
        current = current.next;
    }
    return head;
}


// delete particular number
const deleteByNumber = function (head,k){
    if (head === null){
        return head;
    }
    if (head.data == k){
        head = head.next;
        return head;
    }

    let current = head;
    let prev = null;
    while (current != null){
        if (current.data === k){
            prev.next = prev.next.next;
            break;
        }
        prev = current;
        current = current.next;
    }
    return head;
}


const main = function(){
    let arr = [12, 8, 5, 7];
    let val = 100;

    let head = new Node(arr[0]);
    head.next = new Node(arr[1]);
    head.next.next = new Node(arr[2]);
    head.next.next.next = new Node(arr[3]);

    head = deleteByNumber(head,7);
    print(head);
}

main();