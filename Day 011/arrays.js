// 2 sum problem

/*
    *** Better Solution ***
    Find the sum of any 2 number mathches the target element or not if matches give yes otherwise no
*/

let arr = [4,1,2,3,1];
let target = 5;


const find2Sum = function (arr,target){
    let map = new Map();
    for (let i = 0; i< arr.length; i++){
        let a = arr[i];
        let more = target-a;

        if(map.has(more)){
            return "YES";
        }
        map.set(a,i);
    }
    return "NO";
}


console.log(find2Sum(arr,target))



// 2 sum problem to return index

/*
    *** Better Solution ***
    Find the sum of any 2 number mathches the target element or not if matches give indexes of that elements
*/


const find2SumIndex = function (arr,target){
    let map = new Map();
    for (let i = 0; i< arr.length; i++){
        let a = arr[i];
        let more = target-a;

        if(map.has(more)){
            return [map.get(more),i];
        }
        map.set(a,i);
    }
    return [-1,-1];
}


console.log(find2SumIndex(arr,target))




// 2 sum problem

/*
    *** Optimal Solution ***
    Sort the array and assign 2 pointer one at start and one at end then sum it. if sum is less than the target so for incresing the sum first pinter will move. otherwise if sum is less than target so move last pointer and if it matches give yes otherwise no
*/



const find2SumOptimal = function(arr,target){
    let left = 0;
    let right = arr.length-1;

    while(left<right){
        let sum = arr[right] + arr[left];
        if(sum == target){
            return "YES";
        }
        else if (sum < target) left++;
        else right--;
    }
    return "NO";
}


console.log(find2SumOptimal(arr,target))







//sort array which have only 0, 1 and 2.

let arr2 = [0,0,1,2,1,1,2,2,2,2,0,1,2,2,0,1]

const sortArray = function(arr){
    let n = arr.length;
    let low = 0;
    let mid = 0;
    let high = n-1;

    while(mid <= high){
        if (arr[mid] == 0){
            temp = arr[mid];
            arr[mid] = arr[low];
            arr[low] = temp;
            low++;
            mid++;
        }
        else if(arr[mid] == 1){
            mid++;
        }
        else{
            temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
    return arr;
}

console.log(sortArray(arr2))