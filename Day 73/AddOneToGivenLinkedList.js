// Add 1 to given linked list

/*
    Bruteforce Solution
*/

const reverse = function(head){
    let temp = head;
    let prev = null;

    while (temp != null){
        front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}

const addOneToLinkedList = function(node){
    let node = reverse(node);
    let temp = node;
    let carry = 1

    while(temp !== null){
        temp.data = temp.data + carry;
        if (temp.data < 10){
            carry = 0;
            break;
        }
        else{
            temp.data = 0;
            carry = 1;
        }
        temp = temp.next;
    }

    if (carry == 1){
        let newNode = new Node(1);
        node = reverse(node);
        newNode.next = node;
        return newNode;
    }

    node = reverse(node);
    return node;
}


/*
    Optimal Solution
*/


const helper = function(temp){
    if (temp === null){
        return 1;
    }

    let carry = helper(temp.next);
    temp.data = temp.data + carry;

    if (temp.data < 10){
        return 0;
    }

    temp.data = 0;
    return 1;
}

const addOneToLinkedListOptimal = function(node){
    let carry = helper(node);
    if (carry === 1){
        let newNode = new Node(1);
        newNode.next = node;
        return newNode;
    }
    return node;
}