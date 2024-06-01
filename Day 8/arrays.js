//left rotate the array by one place

let arr = [1,2,3,4,5]
let n = arr.length;
const rotateArray = function (arr,n){
    let temp = arr[0];
    for (let i = 1; i< n; i++){
        arr[i-1] = arr[i];
    }

    arr[n-1] = temp;
    return arr;
}

console.log(rotateArray(arr,n));



//left rotate the array with d palces.



/*

    *** Bruteforce Solution ***
    step 1: First get the d indexs element in the temp variable
    
    step 2: change the indexing of current array elements

    step 3: include the temp elements to the last of the array
*/

let d = 2;
const leftRotateByDPlaces = function(arr,n,d){
    let temp = [];

    for (let i = 0; i < d; i++){
        temp[i] = arr[i]
    }

    for (let i = d; i < n; i++){
        arr[i-d] = arr[i];
    }

    for (let i = n-d; i<n; i++){
        arr[i] = temp[i-(n-d)];
    }
    
    return arr;
}


console.log(leftRotateByDPlaces(arr,n,d))



/*

    *** Optimal Solution ***
    step 1: Get 0 to d place element and reverse it.
    
    step 2: Reverse after the dpalce element.

    step 3: Then reverse the whole new array which we get after first and second step.
*/

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function leftRotate(arr, d,n) {
    if (d === 0 || n === 0) return;
    d = d % n;

    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);

    return arr;
}

console.log(leftRotate(arr,d,n))



//move all 0s to the end of the array

let arr2 = [1,2,0,5,7,0,6,0,55,0]
let n2 = arr2.length;

const moveZeros = function(arr,n){
    let j = -1;
    for (let i = 0; i < n; i++){
        if (arr[i] == 0){
            j = i;
            break;
        }
    }

    if(j==-1) return arr;

    for (let i = j+1; i<n; i++){
        if (arr[i] != 0){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}

console.log(moveZeros(arr2,n2))



//Linear search

let num = 3;
const linearSearch = function(arr,n,num){
    for (let i= 0; i < n; i++){
        if (arr[i] == num){
            return i;
        }
    }
    return -1
}

console.log(linearSearch(arr,n,num))




//Union of two sorted arrays.

/*
    *** Bruteforce Solution ***

    Step 1: Create a set because set will not take duplicate number

    Step 2: Run a loop on both the arrays and insert it in the set.

    Step 3: You will get all the values without duplicate in the set.
*/

let arr3 = [1,1,2,3,4,5];
let arr4 = [2,3,5,6,7];

const sortedArray = function(arr3, arr4){
    n1 = arr3.length;
    n2 = arr4.length;
    let set = new Set();

    for(let i=0; i<n1;i++){
        set.add(arr3[i]);
    }

    for(let i=0; i<n2;i++){
        set.add(arr4[i]);
    }

    return set;

}

console.log(sortedArray(arr3,arr4));


/*
    *** Optimal Solution ***

    Step 1: Create 2 pointer at 2 arrays.

    Step 2: Compare with each other and if first arrays first index is smaller than the other array push the number in the union array. iterate in all the array

    Step 3: If you find that which number you are pushing in the union array if that number exist plus that index j++

    Step 4: If any one iteration is complete and num is still that in any of one array so include all the ramining element in the union array.
*/

const unionArray = function(arr3,arr4){
    let n1 = arr3.length;
    let n2 = arr4.length;
    let i = 0;
    let j = 0;
    let unionArray = [];

    while(i < n1 && j < n2){
        if (arr3[i] <= arr4[j]){
            if (unionArray.length == 0 || unionArray[unionArray.length-1] != arr3[i]){
                unionArray.push(arr3[i])
            }
            i++;
        }
        else{
            if (unionArray.length == 0 || unionArray[unionArray.length-1] != arr4[j]){
                unionArray.push(arr4[j])
            }
            j++;
        }
    }

    while(j < n2){
        if (unionArray.length == 0 || unionArray[unionArray.length-1] != arr4[j]){
            unionArray.push(arr4[j])
        }
        j++;
    }

    while(i < n1){
        if (unionArray.length == 0 || unionArray[unionArray.length-1] != arr3[i]){
            unionArray.push(arr3[i])
        }
        i++;
    }

    return unionArray;
}

console.log(unionArray(arr3,arr4));



//Intersection of two sorted arrays.

/*
    Step 1: Create two pointers for 2 arrays

    Step 2: while both the pointers is less than array length. If arr1[i] < arr2[j] increse the first pointer i++.

    Step 3: If arr2[j] < arr1[i] increse the seconf pointer j++.

    Step 4: In else push the first arrays element in new array and increse both pointers.

*/


const findArrayIntersection = function(arr3,arr4){
    let n = arr3.length;
    let m = arr4.length;
    let i = 0;
    let j = 0;
    let ans = [];

    while (i < n && j < m){
        if (arr3[i] < arr4[j] ){
            i++;
        }
        else if(arr4[j] < arr3[i]){
            j++;
        }
        else{
            ans.push(arr3[i]);
            i++;
            j++;
        }
    }
    return ans;
}

console.log(findArrayIntersection(arr3,arr4));