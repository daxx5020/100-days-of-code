// Flattening a linked list


/*
    Bruteforce Solution
*/

const convert = function(arr){
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let temp = head;
    
    for(let i = 1; i < arr.length; i++){
        newNode = new Node(arr[i]);
        temp.bottom = newNode;
        temp = temp.bottom;
    }
    return head;
}

const flattenBruteForce = function(head){
    let ans = [];
    let temp = head;

    while(temp !== null){
        let t2 = temp;
        while(t2 !== null){
            ans.push(t2.data);
            t2 = t2.bottom;
        }
        temp = temp.next;
    }
    ans.sort((a,b) => a - b);
    head = convert(ans);

}


/*
    Optimal Solution
*/

const mergeList = function(list1, list2){
    let dummyNode = new Node(-1);
    let res = dummyNode;

    while(list1 !== null && list2 !== null){
        if (list1.data < list2.data){
            res.bottom = list1;
            res = list1;
            list1 = list1.bottom;
        }
        else{
            res.bottom = list2;
            res = list2;
            list2 = list2.bottom;
        }
        res.next = null;
    }
    if (list1){
        res.bottom = list1;
    }
    else{
        res.bottom = list2;
    }

    return dummyNode.bottom;
}

const flattenOptimal = function(head){
    if (head === null || head.next === null){
        return head;
    }

    let mergeHead = flattenOptimal(head.next);
    return mergeList(head,mergeHead);

}