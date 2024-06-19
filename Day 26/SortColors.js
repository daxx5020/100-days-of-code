// Sort colors problem


let nums = [0,0,1,1,2,2];

const sortColors = function (nums){
    nums.sort((a,b) => a-b)
    return nums;
}


console.log(sortColors(nums));