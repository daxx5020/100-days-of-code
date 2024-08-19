// Binary search to find x

let nums = [-1,0,3,5,9,12];
let target = 9;

const binarySearch = function (nums,target){
    let n = nums.length;
    let left = 0;
    let right = n - 1;

    while (left <= right){
        let mid = Math.floor((left+right) /2);
        
        if (nums[mid] == target){
            return mid;
        }
        else if(nums[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch(nums,target));