// Remove nth node from end in linked list

/*
    Bruteforce solution
*/

const removeNthNodeBruteForce = function(head,n){
    let count = 0;
    let temp = head;

    if (head === null) {
        return null;
    }

    while(temp !== null){
        count++;
        temp = temp.next;
    }

    if (count === n){
        let newHead = head.next;
        return newHead;
    }

    let res = count - n;
    temp = head;

    while(temp !== null){
        res--;

        if (res === 0){
            break;
        }
        temp = temp.next;
    }
    delNode = temp.next;
    temp.next = temp.next.next;
    return head;
}



/*
    Optimal solution
*/


const removeNthNodeOptimal = function (head,n){
    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++){
        fast = fast.next;

        if (fast === null){
            return head.next;
        }
    }

    while(fast.next !== null){
        fast = fast.next;
        slow = slow.next;
    }

    let delNode = slow.next;
    slow.next = slow.next.next;
    delNode = null;
    return head;
}