// Sort a linked list

/*
    Bruteforce solution
*/

const sortLinkedlistBruteForce = function(head){
    let arr = [];
    let temp = head;

    while(temp !== null){
        arr.push(temp.val);
        temp = temp.next;
    }

    arr.sort((a,b) => a - b);

    let i = 0;
    temp = head;

    while(temp !== null){
        temp.val = arr[i];
        i++;
        temp = temp.next;
    }
    return head;
}


/*
    Optimal solution
*/

const findMiddle = function(head){
    let slow = head;
    let fast = head.next;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const mergeLists = function(leftHead, rightHead){
    let dummyNode = new ListNode(-1);
    let temp = dummyNode;

    while(leftHead !== null && rightHead !== null){
        if (leftHead.val < rightHead.val){
            temp.next = leftHead;
            temp = leftHead;
            leftHead = leftHead.next;
        }
        else{
            temp.next = rightHead;
            temp = rightHead;
            rightHead = rightHead.next;
        }
    }
    if (leftHead !== null) temp.next = leftHead;
    else temp.next = rightHead;

    return dummyNode.next;
}

const sortLinkedlistoptimal = function(head){
    if (head == null || head.next == null){
        return head;
    }

    let middle = findMiddle(head);
    let leftHead = head;
    let rightHead = middle.next;
    middle.next = null;

    leftHead = sortList(leftHead);
    rightHead = sortList(rightHead);

    return mergeLists(leftHead, rightHead);
}