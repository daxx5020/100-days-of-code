// Find minimum in rotated sorted array

let nums = [3,4,5,1,2];

/*
    Bruteforce Solution
*/

const findMinimumBruteForce = function (nums){
    let n = nums.length;
    let min = nums[0];
    for (let i = 0; i < n; i++){
        if (nums[i] < min){
            min = nums[i];
        }
    }
    return min;
}


console.log(findMinimumBruteForce(nums));



/*
    Optimal Solution
*/


const findMinimumBetter = function (nums){
    let n = nums.length;
}


console.log(findMinimumBetter(nums));