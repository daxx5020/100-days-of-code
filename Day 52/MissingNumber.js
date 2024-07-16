// Find kth missing positive number


let arr = [2,3,4,7,11]
let k = 5

/*
    Optimal Solution
*/

const findKthPositiveNumber = function (arr, k){
    let low = 0;
    let high = arr.length;

    while (low <= high){
        let mid = Math.floor((high + low)/2);
        let missing = arr[mid] - [mid + 1];
        if (missing < k){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return low + k;
}

console.log(findKthPositiveNumber(arr, k))