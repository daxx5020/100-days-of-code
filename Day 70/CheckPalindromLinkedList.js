// Check if a linkedlist is palindrom or not


/*
    Bruteforce solution
*/


const checkPalindromBruteForce = function (head){
    let st = [];
    let temp = head;
    
    while(temp != null){
        st.push(temp.val);
        temp = temp.next;
    }

    temp = head;
    while(temp !== null){
        if (temp.val !== st[st.length - 1]){
            return false;
        }
        temp = temp.next;
        st.pop();
    }
    return true;
}

/*
    Optimal solution
*/

const reverse = function(head){
    if (head === null || head.next === null){
        return head;
    }
    let newHead = reverse(head.next);
    let front = head.next;
    front.next = head;
    head.next = null;
    return newHead;
}

const checkPalindromOptimal = function (head){
    let slow = head;
    let fast = head;

    while(fast.next !== null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let newHead = reverse(slow.next);
    let first = head;
    let second = newHead;

    while(second !== null){
        if(first.val !== second.val){
            reverse(newHead);
            return false;
        }
        first = first.next;
        second = second.next;   
    }
    reverse(newHead);
    return true;
}