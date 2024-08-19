// Find pair with given sum in doubly linked list

/*
    Bruteforce solution
*/

const findPairBruteForce = function(head, target){
    let temp1 = head;
    let ds = [];

    while(temp1 !== null){
        let temp2 = temp1.next;
        while(temp2 !== null && temp1.data + temp2.data <= target){
            if (temp1.data + temp2.data == target){
                ds.push([temp1.data,temp2.data])
            }
            temp2 = temp2.next;
        }
        temp1 = temp1.next;
    }
    return ds;
}


/*
    Optimal solution
*/

const findTail = function(head){
    let tail = head;

    while(tail.next !== null){
        tail = tail.next;
    }
    return tail;
}

const findPairOptimal = function(head, target){

    let left = head;
    let right = findTail(head);
    let ds = [];

    if (head === null) return ds;

    while(left.data < right.data){
        if (left.data + right.data == target){
            ds.push([left.data,right.data])
            left = left.next;
            right = right.prev;
        }
        else if(left.data + right.data < target){
            left = left.next
        }
        else{
            right = right.prev;
        }
    }
    return ds;
}