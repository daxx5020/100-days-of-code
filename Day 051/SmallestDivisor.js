// Smallest divisor


let nums = [1,2,5,9]
let threshold = 6

/*
    Bruteforce Solution
*/

const smallestDivisorBruteForce = function (nums,threshold) {
    let max = Math.max(...nums);
    for (let d = 1; d <= max; d++){
        let sum = 0;
        for (let i = 0; i < nums.length; i++){
            sum += Math.ceil(nums[i] / d);
        }
        if (sum <= threshold){
            return d;
        }
    }
    return -1;
}

console.log(smallestDivisorBruteForce(nums,threshold));


/*
    Optimal Solution
*/

const sumByd = function (nums,mid){
    let sum = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++){
        sum = sum + Math.ceil(nums[i] / mid)
    }
    return sum;
}


const smallestDivisorOptimal = function (nums, threshold) {
    let high = Math.max(...nums);
    let low = 1;

    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if (sumByd(nums,mid) <= threshold){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return low;
}

console.log(smallestDivisorOptimal(nums, threshold));