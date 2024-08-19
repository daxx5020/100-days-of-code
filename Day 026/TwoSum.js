// Two sum problem

let nums = [2,7,11,15]
let target = 9

const twoSum = function (nums,target){
    let i = 0;
    let output = [];

    while(i <= nums.length-1){
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] + nums[j] == target ){
                output.push(i);
                output.push(j);
                break;
            }
        }
        i++;
    }
    return output;
}

console.log(twoSum(nums,target))