// Finding the starting node

/*
    Bruteforce solution
*/

const findingNodeBruteForce = function(head){
    let mpp = new Map();
    let temp = head;

    while(temp !== null){
        if (mpp.has(temp)){
            return temp;
        }
        mpp.set(temp,1);
        temp = temp.next;
    }
    return null;
}


/*
    Optimal solution
*/

const findingNodeOptimal = function(head){
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast){
            slow = head;
            while(slow != fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow; //starting point
        }
    }
    return null;
}