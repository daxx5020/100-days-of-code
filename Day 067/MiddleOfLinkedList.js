// FInd middle of the linked list


class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

/*
    Better solution
*/

const middleNode = function (head){
    if (head === null || head.next === null) {
        return head;
    }
    
    let temp = head;
    let cnt = 0;

    while (temp !== null){
        cnt++;
        temp = temp.next;
    }

    midnode = Math.floor(cnt / 2);
    temp = head;

    while (midnode > 0){
        temp = temp.next;
        midnode--;
    }
    return temp;
}

/*
    Optimal solution
*/

const middleNodeOptimal = function (head){
    let slow = head;
    let fast = head;

    while(fast  != null && fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
    
}

let head = new Node(1);
head.next = new Node(2, head);
head.next.next = new Node(3, head.next);
head.next.next.next = new Node(4, head.next.next);
head.next.next.next.next = new Node(5, head.next.next.next);

console.log(middleNode(head).val);