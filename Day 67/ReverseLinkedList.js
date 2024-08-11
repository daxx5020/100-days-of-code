// Reverse the singly linked list interative

/*
    Bruteforce solution
*/

const reverseLinkedList = (head) => {
    if (head === null) return null;

    let st = [];
    let temp = head;

    while (temp != null){
        st.push(temp);
        temp = temp.next;
    }

    head = st.pop();
    temp = head;
    
    while (st.length > 0) {
        temp.next = st.pop();
        temp = temp.next;
    }

    temp.next = null;
    return head;
}

console.log(reverseLinkedList(head))


/*
    Optimal solution
*/

const reverseLinkedListOptimal = function(head){
    let temp = head;
    let prev = null;

    while (temp != null){
        front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}