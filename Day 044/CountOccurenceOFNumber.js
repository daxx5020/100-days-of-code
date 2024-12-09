// Find count occurene of a given number in a sorted array

let n = 7;
let x = 2;
let arr = [1, 1, 2, 2, 2, 2, 3];

/*
    Bruteforce Solution
*/

const FindCountBruteForce = function (arr,n,x){
    let count = 0;
    for (let i = 0; i < n; i++){
        if (arr[i] === x) count++;
    }
    return count;
}

console.log(FindCountBruteForce(arr,n,x));


/*
    Optimal Solution
*/


const findFirst = (arr, x) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === x && (mid === 0 || arr[mid - 1] < x)) {
            return mid;
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

const findLast = (arr, x) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === x && (mid === arr.length - 1 || arr[mid + 1] > x)) {
            return mid;
        } else if (arr[mid] <= x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};


const FindCountOptimal = function (arr, n, x) {
    const firstIndex = findFirst(arr, x);
    if (firstIndex === -1) {
        return 0; // x is not present in the array
    }
    const lastIndex = findLast(arr, x);
    return lastIndex - firstIndex + 1;
};

console.log(FindCountOptimal(arr,n,x))