nums = [-2,-1]

var maxSubArray = function(nums) {
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

console.log(maxSubArray(nums));