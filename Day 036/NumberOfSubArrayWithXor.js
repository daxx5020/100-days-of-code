// Count number of subarray with given xor


let arr = [4,2,2,6,4];
let k = 6;


// *** Bruteforce Solution ***

const countNumberOfsubararyBruteForce = function (arr,k){
    let n = arr.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let xor = 0;
            for (let k=i; k <= j; k++){
                xor = xor ^ arr[k];
            }
            if (xor == k){
                count++;
            }
        }
    }
    return count;
}


console.log(countNumberOfsubararyBruteForce(arr,k));



// *** optimal Solution ***


const countNumberOfsubararyOptimal = function(a,b){
    let n = a.length;
    let xr = 0;
    let mpp = new Map();
    mpp.set(xr,1);
    let cnt = 0;
    for (let i = 0; i < n; i++){
        xr = xr ^ a[i];

        let x = xr ^ b;

        cnt += mpp.get(x) || 0;

        mpp.set(xr,(mpp.get(xr)|| 0)+1);
    }
    return cnt;
}


console.log(countNumberOfsubararyOptimal(arr,k));