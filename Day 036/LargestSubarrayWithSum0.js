// Find the largest subarray which sum is 0

let arr = [2, 10, 4];


// *** Bruteforce Method


const largestSubarrayBruteForce = function (arr) {
    let n = arr.length;
    let mpp = new Map();
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < n; i++){
        sum += arr[i];

        if (sum === 0){
            maxLen = i + 1;
        }
        else if (mpp.has(sum)){
            maxLen = Math.max(maxLen, i - mpp.get(sum))
        }
        else{
            mpp.set(sum,i)
        }
    }
    return maxLen;

}

console.log(largestSubarrayBruteForce(arr))



// *** Optimal Method ***


const largestSubarrayOptimal = function(arr){
    let n = arr.length;
    let sum = 0;
    let maxi = 0;
    let mpp = new Map();

    for (let i = 0; i < n; i++){
        sum += arr[i];
        if (sum === 0){
            maxi = i+1;
        }
        else{
            if(mpp.has(sum)){
                maxi = Math.max(maxi,i - mpp.get(sum));
            }
            else{
                mpp.set(sum,i)
            }
        }
    }
    return maxi;
}


console.log(largestSubarrayOptimal(arr))