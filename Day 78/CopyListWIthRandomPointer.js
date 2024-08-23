// Copy list with random pointers

/*
    Bruteforce Solution
*/

const copyList = function(head){
    let temp = head;
    let mpp = new Map();

    while(temp !== null){
        let newNode = new _Node(temp.val);
        mpp.set(temp,newNode);
        temp = temp.next;
    }

    temp = head;
    while(temp !== null){
        let copyNode = mpp.get(temp);
        copyNode.next = mpp.get(temp.next);
        copyNode.random = mpp.get(temp.random);
        temp = temp.next;
    }
    return mpp.get(head);
}


/*
    Optimal Solution
*/

const copyListOptimal = function(head){
    let temp = head;

    while(temp !== null){
        let copyNode = new _Node(temp.val);
        copyNode.next = temp.next;
        temp.next = copyNode;
        temp = temp.next.next;
    }

    temp = head;
    while(temp !== null){
        copyNode = temp.next;
        if (temp.random){
            copyNode.random = temp.random.next;
        }
        else{
            copyNode.random = null;            
        }
        temp = temp.next.next;
    }

    let dummyNode = new _Node(-1);
    let res = dummyNode;
    temp = head;
    
    while(temp !== null){
        res.next = temp.next;
        res = res.next;
        
        temp.next = temp.next.next;
        temp = temp.next;
    }
    return dummyNode.next
}