// Remove duplicate from a sorted doubly linked list.


const removeDuplicates = function(head){
    let temp = head;
    while(temp !== null && temp.next !== null){
        let nextNode = temp.next;
        while(nextNode !== null && nextNode.data == temp.data){
            nextNode = nextNode.next;
        }
        temp.next = nextNode;
        if (nextNode){
            nextNode.prev = temp;
        }
        temp = temp.next;
    }
    return head;
}