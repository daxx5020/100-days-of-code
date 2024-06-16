// Left rotate array by d place


let nums = [1,2,3,4,5,6,7];
let k = 3;

const leftRotateArrayByDPlace = function (nums,k){
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);

    return nums;
}

const reverse = function (nums, start, end){
    while (start < end){
        [nums[start], nums[end]] = [nums[end],nums[start]];
        start++;
        end--;
    }
}


console.log(leftRotateArrayByDPlace(nums,k))