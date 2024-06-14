//check the array is sorted or not

let nums = [3,4,5,1,2];


const isSorted = function(nums){
    for(let i = 0; i < nums.length; i++){
        for (j = i+1; j < nums.length; j++){
            if (nums[j] < nums[i] ){
                return false;
            }
        }
    }
    return true;
}


console.log(isSorted(nums))