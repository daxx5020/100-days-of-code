// Floor in sorted array

let n = 7
let x = 5
let arr = [1,2,8,10,11,12,19];


/*
    Bruteforce Solution
*/

const findFloorBruteForce = function (arr, n, x) {
    let result = -1;

    for (let i = 0; i < n; i++) {
        if (arr[i] <= x) {
            result = i;
        }
    }
    return result;
}


console.log(findFloorBruteForce(arr,n,x));


/*
    Better Solution
*/

const sortedArray = function(arr,n,x){
    let ans = -1;
    let low = 0;
    let high = n-1;

    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] <= x){
            ans = mid;
            low = mid + 1;
        }
        else{
            high = mid -1;
        }
    }
    return ans;
}

console.log(sortedArray(arr,n,x));