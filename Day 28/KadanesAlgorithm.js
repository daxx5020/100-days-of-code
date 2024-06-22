//Maximum Subarray Sum in an Array

let nums = [-2,-1];

const maxSubArray = function (nums){
    let maxi = -Infinity;
    for (let i = 0; i < nums.length; i++){
        sum = 0;
        for (let j = i; j < nums.length; j++){
            sum += nums [j];
            maxi = Math.max(sum,maxi)
        }
    }
    return maxi;
}

console.log(maxSubArray(nums))





// *** Optimal Solution ***


var maxSubArrayOptimal = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }
    let sum = nums[0];
    let max = nums[0];
    
    for (let i=1; i<nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        max = Math.max(max, sum);
    }
    return max;
};

console.log(maxSubArrayOptimal(nums))