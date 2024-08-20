// Reverse nodes in k group


const findKthNode = function(temp,k){
    k -= 1;
    while(temp !== null && k > 0){
        k--;
        temp = temp.next;
    }
    return temp;
}

const reverse = function(head){
    let temp = head;
    let prev = null;

    while(temp !== null){
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}


const reverseNodes = function(head,k){
    let temp = head;
    let prevNode = null;
    while(temp !== null){
        let kthnode = findKthNode(temp,k);
        if(kthnode === null){
            if (prevNode){
                prevNode.next = temp;
            }
            break;
        }
        let nextNode = kthnode.next;
        kthnode.next = null;
        reverse(temp);

        if (temp === head){
            head = kthnode;
        }
        else{
            prevNode.next = kthnode;
        }
        prevNode = temp;
        temp = nextNode;
    }
    return head;
}