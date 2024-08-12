// Detect loop in linked list

/*
    Brutefoce Solution
*/

const detectLoop = function(head){
    let mpp = new Map();
    let temp = head;

    while (temp != null){
        if (mpp.has(temp)){
            return true;
        }
        mpp.set(temp,true);
        temp = temp.next;
    }
    return false;
}

/*
    Optimal solution
*/

const detectLoopOptimal = function(head){
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast){
            return true;
        }
    }
    return false;
}