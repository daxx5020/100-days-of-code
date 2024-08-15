// Delete the middle node

/*
    Brutefoce solution
*/

const deleteMiddleNodeBruteForce = function (head){
    
    if (head == null || head.next == null){
        return null;
    }
    
    let n = 0;
    let temp = head;
    
    while(temp !== null){
        n++;
        temp = temp.next;
    }

    res = Math.floor(n / 2);
    temp = head;

    while(temp !== null){
        res--;
        if (res == 0){
            middle = temp.next;
            temp.next = temp.next.next;
            break;
        }
        temp = temp.next;
    }
    return head;
}


/*
    Optimal solution
*/

const deleteMiddleNodeOptimal = function(head){
    
    if (head == null || head.next == null){
        return null;
    }
    
    let slow= head;
    let fast = head;

    fast = head.next.next;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = slow.next.next;
    return head;
}