// Rotate a linked list


const findNthNode = function(head,k){
    let cnt = 1;
    while(head !== null){
        if (cnt === k) return head;
        cnt++;
        head = head.next;
    }
    return head;
}

const rotateLinkedLit = function(head,k){
    if (head === null || k === 0){
        return head;
    }
    
    let len = 1;
    let tail = head;

    while(tail.next !== null){
        len++;
        tail = tail.next;
    }

    if (k % len == 0) return head;
    k = k % len;
    
    tail.next = head;
    newLastNode = findNthNode(head, len - k);
    
    head = newLastNode.next;
    newLastNode.next = null;
    return head;
}