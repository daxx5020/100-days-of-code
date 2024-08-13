// Odd even linked list


/*
    Bruteforce solution
*/

const oddEvenLinkedListBruteforce = function(head){
    let arr = [];
    let temp = head;

    if (head == null || head.next == null){
        return head;
    }

    while(temp !== null && temp.next !== null){
        arr.add(temp.data);
        temp = temp.next.next;
    }

    if (temp) arr.add(temp.data);

    temp = head.next;
    while(temp !== null && temp.next !== null){
        arr.add(temp.data);
        temp = temp.next.next;
    }

    if (temp) arr.add(temp.data);

    let i = 0;
    temp = head;

    while(temp !== null){
        temp.data = arr[i];
        i++;
        temp = temp.next;

    }
    return head;
}

/*
    Optimal solution
*/

const oddEvenLinkedListOptimal = function(head){
    let odd = head;
    let even = head.next;
    let evenHead = head.next;
    
    if (head == null || head.next == null){
        return head;
    }

    while(even !== null && even.next !== null){
        odd.next = odd.next.next;
        even.next = even.next.next;

        odd = odd.next;
        even = even.next.next;
    }

    odd.next = evenHead;
    return head;
}