// Delete all occurence in doubly linked list

/*

*/

const deleteInDll = function(head_ref, key){
    let temp = head_ref;
    while(temp !== null){
        if (temp.data == key){
            if (temp == head_ref){
                head_ref = head_ref.next;
            }
            let nextNode = temp.next;
            let prevNode = temp.prev;

            if (nextNode){
                nextNode.prev = prevNode;
            }
            if (prevNode){
                prevNode.next = nextNode;
            }
            temp = nextNode;
        }
        else{
            temp = temp.next
        }
    }
    return head_ref;
}