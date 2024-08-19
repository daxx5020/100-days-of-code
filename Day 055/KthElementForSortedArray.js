// Kth elememt of two sorted array

let A = [2, 3, 6, 7, 9];
let B = [1, 4, 8, 10];
let n = A.length;
let m = B.length;
let k = 5

/*
    Btuteforce Solution
*/

const findKthElementBruteForce = function(A,B,n,m,k){
    let arr = [];
    let i = 0;
    let j = 0;

    while (i < n && j < m){
        if (A[i] < B[j]) arr.push(A[i++]);
        else arr.push(B[j++]);
    }

    while (i < n) arr.push(A[i++]);
    while (j < m) arr.push(B[j++]);
    return arr[k - 1];
}

console.log(findKthElementBruteForce(A,B,n,m,k));



/*
    Btuteforce Solution
*/


const findKthElementOptimal = function(A,B,n,m,k){
    if (m > n) return findKthElementOptimal(B,A,m,n,k);
    
    let left = k;
    let low = Math.max(0, k - n);
    let high = Math.min(k, m);

    while (low <= high){
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;

        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER
        if (mid1 < m) r1 = B[mid1];
        if (mid2 < n) r2 = A[mid2];
        if (mid1 - 1 >= 0) l1 = B[mid1 - 1];
        if (mid2 - 1 >= 0) l2 = A[mid2 - 1];

        if (l1 <= r2 && l2 <= r1){
            return Math.max(l1, l2);
        }
        else if(l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;
    }
    return 0;
}

console.log(findKthElementOptimal(A,B,n,m,k));