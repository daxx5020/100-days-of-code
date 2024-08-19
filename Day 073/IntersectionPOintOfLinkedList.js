// Find intersection point of linked list.

/*
    Bruteforce Solution
*/

const intersectionPointBruteForce = function(headA,headB){
    let mpp = new Map();
    let temp = headA;

    while(temp !== null){
        mpp.set(temp,1);
        temp = temp.next;
    }

    temp = headB;

    while(temp !== null){
        if (mpp.has(temp)){
            return temp;
        }
        temp = temp.next;
    }

    return null;
}

/*
    Better Solution
*/

const collisionPoint = function(t1,t2,d){
    while(d){
        t2 = t2.next;
        d--;
    }

    while(t1!==t2){
        t1 = t1.next;
        t2 = t2.next;
    }
    return t1;
}

const intersectionPointBetter = function(headA,headB){
    let t1 = headA;
    let t2 = headB;
    let n1 = 0;
    let n2 = 0;

    while(t1 !== null){
        n1++;
        t1 = t1.next;
    }

    while(t2 !== null){
        n2++;
        t2 = t2.next;
    }

    if (n1 < n2){
        return collisionPoint(headA,headB,n2-n1)
    }
    else{
        return collisionPoint(headB,headA,n1-n2)
    }

}


/*
    Better Solution
*/

const intersectionPointOptimal = function(headA,headB){
    if (headA == null || headB == null){
        return null;
    }

    t1 = headA;
    t2 = headB;

    while(t1 !== t2){
        t1 = t1.next;
        t2 = t2.next;

        if (t1 === t2) return t1;

        if (t1 === null) t1 = headB;
        if (t2 === null) t2 = headA;
    }

    return t1;
}