// Subarray sum equals K


let nums = [1,2,3]
let k = 3


// *** Brute Force Method *** 

const subArraySumBruteForce = function (nums,k){
    let n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++){
        let sum = 0;
        for (let j = i; j < n;j++){
            sum += nums[j];
            if (sum === k){
                count+=1;
            }
        }
    }
    return count;
}

console.log(subArraySumBruteForce(nums,k))



// *** Better Solution *** 


