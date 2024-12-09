//check the array is sorted or not

let nums = [3,4,5,1,2];


const checkRotateSorted = function (nums){
    
    let n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++){
        if (nums[i] > nums[(i+1) % n ]){
            count++;
            if (count > 1){
                return false;
            }
        }
    }
    return true;
}

console.log(checkRotateSorted(nums))