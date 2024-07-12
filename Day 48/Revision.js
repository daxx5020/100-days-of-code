// Revison of last bimary search solution

/*
    Simple binary search algorithm
*/





/*
    First and last occurence in the array
*/


let x = 2;
let arr = [1, 1, 2, 2, 2, 2, 3];


const lowerBound = function(arr,x){
    let n = arr.length;
    let low = 0;
    let high = n -1;
    let ans = n;
    while (low <= high){
        let mid = Math.floor((high + low)/2);
        if (arr[mid] >= x){
            ans  = mid;
            high = mid -1;
        }
        else{
            low = mid + 1;
        }
    }
    return ans;
}

const upperBound = function(arr,x){
    let n = arr.length;
    let low = 0;
    let high = n -1;
    let ans = n;
    while (low <= high){
        let mid = Math.floor((high + low)/2);
        if (arr[mid] > x){
            ans  = mid;
            high = mid -1;
        }
        else{
            low = mid + 1;
        }
    }
    return ans;
}


const firstAndLastOccurrence = function (arr, x){
    let n = arr.length;
    let lb = lowerBound(arr,x);
    let ub = upperBound(arr,x);
    if (lb === n || arr[lb] != x) return [-1,-1];
    return [lb, ub - 1];
}

console.log(firstAndLastOccurrence(arr,x));