// Single element in sorted array

nums = [1,1,2,3,3,4,4,8,8]

/*
    Bruteforce Solution
*/

const singleElementBRuteForce = function (nums){
    for (let i = 0; i < nums.length; i++) {
        if (i == 0){
            if (nums[i] != nums[i+1]) return nums[i];
        }
        else if (i == n-1){
            if(nums[i] != nums[i-1]) return nums[i];
        }
        else{
            if(nums[i] != nums[i+1] && nums[i] != nums[i-1]) return nums[i];
        }
    }
}

console.log(singleElementBRuteForce(nums));


/*
    Optimal Solution
*/

const singleElementBetter = function (nums){
    let n = nums.length;
    let low = 1;
    let high = n -2;

    if (n == 1) return nums[0]; 
    if (nums[0] != nums[1]) return nums[0];
    if (nums[n-1] != nums[n-2]) return nums[n-1];
    
    while (low <= high){
        let mid = Math.floor((low + high)/2);
        if (nums[mid] != nums[mid + 1] && nums[mid] != nums[mid-1]){
            return nums[mid];
        }
        if ((mid % 2 === 1 && nums[mid] === nums[mid - 1])
            || (mid % 2 === 0 && nums[mid] === nums[mid + 1])){
                low = mid + 1;
        }
        else{
            high = mid -1;
        }
    }
    return -1;
}

console.log(singleElementBetter(nums));