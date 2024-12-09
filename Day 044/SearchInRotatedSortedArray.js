// Search in rotated sorted array

let nums = [4,5,6,7,0,1,2]
let target = 6;

/*
    Bruteforce Solution
*/


const searchInArrayBruteForce = function (nums,target){
    let n = nums.length;
    for (let i = 0; i < n; i++){
        if (nums[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(searchInArrayBruteForce(nums,target))


/*
    Optimal Solution
*/


const searchInArrayBetter = function (nums,target){
    let n = nums.length;
    let low = 0;
    let high = n-1;

    while (low <= high){
        let mid = Math.floor((low+high) / 2);
        if (nums[mid] === target) return mid;
        if (nums[low] <= nums[mid]){
            if (nums[low] <= target && target <= nums[mid]){
                high = mid - 1;
            }
            else{
                low = mid + 1;
            }
        }
        else{
            if (nums[mid] <= target && target <= nums[high]){
                low = mid + 1;
            }
            else{
                high = mid -1;
            }
        }
    }
    return -1;
}

console.log(searchInArrayBetter(nums,target))