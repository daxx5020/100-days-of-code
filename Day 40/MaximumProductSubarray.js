// Maximum product subarray

let nums = [2,3,-2,4];

/*
    Bruteforce Solution
*/

// const maximumProductSubarrayBruteForce = function (nums){
//     let n = nums.length;
//     let maxi = Number.MIN_VALUE;
//     for (let i = 0; i < n;i++){
//         for (let j = i; j < n; j++){
//             let product = 1;
//             for (k = i; k < j; k++){
//                 product = product * nums[k]
//             }
//             maxi = Math.max(maxi,product)
//         }
//     }
//     return maxi;
// }


// console.log(maximumProductSubarrayBruteForce(nums))



/*
    Better Solution
*/

// const maximumProductSubarrayBetter = function (nums){
//     let n = nums.length;
//     let maxi = -Infinity;
//     for (let i = 0; i < n;i++){
//         let product = 1;
//         for (let j = i; j < n; j++){
//             product = product * nums[j];
//             maxi = Math.max(maxi,product)
//         }
//     }
//     return maxi;
// }


// console.log(maximumProductSubarrayBetter(nums))


const maximumProductSubarrayOptimal = function (nums){
    let pre = 1;
    let suff = 1;
    let n = nums.length;
    let maxi = -Infinity;

    for (let i = 0; i < n; i++){
        if (pre == 0) pre = 1;
        if (suff == 0) suff = 1;

        pre = pre * nums[i];
        suff = suff * nums[n-i-1];
        maxi = Math.max(maxi,Math.max(pre,suff));
    }
    return maxi;
}

console.log(maximumProductSubarrayOptimal(nums));