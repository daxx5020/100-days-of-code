// Add two number in given linked list


/*
    Bruteforce Solution
*/

const addTwoNumberBruteForce = function(l1, l2){
    let t1 = l1;
    let t2 = l2;
    let dummyNode = new ListNode(-1)
    let curr = dummyNode;
    let carry = 0;

    while(t1 !== null || t2 !== null){
        let sum = carry;
        if (t1){
            sum += t1.val
        }
        if (t2){
            sum += t2.val
        }

        newNode = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);

        curr.next = newNode;
        curr = curr.next;

        if (t1){
            t1 = t1.next;
        }
        if (t2){
            t2 = t2.next;
        }
    }
    
    if (carry){
        newNode = new ListNode(carry);
        curr.next = newNode;
    }

    return dummyNode.next;

}