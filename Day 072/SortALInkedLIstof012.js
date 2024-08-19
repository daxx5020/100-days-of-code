// sort a linked list of 0s, 1s, 2s

/*
    Bruteforce solution
*/

const sortLinkedList = function (head){
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    let temp = head;

    while(temp !== null){
        if (temp.data === 0){
            count0++;
        }
        else if (temp.data === 1){
            count1++;
        }
        else{
            count2++;
        }
        temp = temp.next;
    }

    temp = head;

    while(temp !== null){
        if (count0){
            temp.data = 0;
            count0--;
        }
        else if(count1){
            temp.data = 1
            count1--;
        }
        else{
            temp.data = 2;
            count2--;
        }
        temp = temp.next;
    }
    return head;
}


/*
    Optimal solution
*/

const sortLinkedListOptimal = function (head){
    if (head === null || head.next === null){
        return head;
    }

    let zeroHead = new Node(-1);
    let oneHead = new Node(-1);
    let twoHead = new Node(-1);
    
    let zero = zeroHead;
    let one = oneHead;
    let two = twoHead;

    let temp = head;

    while(temp !== null){
        if (temp.data === 0){
            zero.next = temp;
            zero = temp;
        }
        else if (temp.data === 1){
            one.next = temp;
            one = temp;
        }
        else{
            two.next = temp;
            two = temp;
        }
        temp = temp.next;
    }

    zero.next = oneHead.next ? oneHead.next : twoHead.next;
    one.next = twoHead.next;
    two.next = null;
    return zeroHead.next;
}