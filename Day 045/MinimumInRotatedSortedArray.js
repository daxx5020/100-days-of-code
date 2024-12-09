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
    let low = 0;
    let high = n - 1;
    let ans = Infinity;

    while(low <= high){
        let mid = Math.floor((high + low) / 2);

        // If one half is already sorted then
        if (nums[low] <= nums[high]){
            ans = Math.min(ans,nums[low]);
            break;
        }
        
        if (nums[low] <= nums[mid]){
            ans = Math.min(ans,nums[low]);
            low = mid+1;
        }
        else{
            ans = Math.min(ans,nums[mid]);
            high = mid-1;
        }
    }
    return ans;
}


console.log(findMinimumBetter(nums));