// Find length of the loop

/*
    Bruteforce solution
*/

const findLengthBruteForce = function (head){
    let mpp = new Map();
    let timer = 0;
    let temp = head;

    while(temp != null){
        if (mpp.has(temp)){
            value = mpp.get(temp);
            return timer - value;
        }
        mpp.set(temp,timer);
        timer++;
        temp = temp.next;
    }
    return 0;
}


/*
    Optimal solution
*/

const findLength = function (slow, fast){
    count = 1;
    fast = fast.next;

    while(slow !== fast){
        count++;
        fast = fast.next;
    }
    return count;
}

const findLengthOptimal = function (head){
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast){
            return findLength(slow,fast);
        }
    }
    return 0;
}

