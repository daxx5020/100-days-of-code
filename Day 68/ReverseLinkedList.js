// Reverse the singly linked list with recursive approch


const reverseLinkedList = function (head){
    if (head === null || head.next === null){
        return head;
    }

    let newhead = reverse(head.next);
    
    head.next.next = head;
    head.next = null;
    return newhead;
}

