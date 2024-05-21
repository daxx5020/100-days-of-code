let nums = [2,5,5,11];
let target = 10;
let output = [];

var twoSum = function(nums, target) {
    i = 0;
    while( i <= nums.length-1 ){
        for(j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                output.push(i);
                output.push(j);
                break;
            }
        }
        i++;
    }
    return output;
};

console.log(twoSum(nums,target));