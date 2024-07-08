// Find first and last position element in sorted array.

let nums = [5,7,7,8,8,10]
let target = 8


const searchRange = function (nums, target) {
    let first = -1;
    let last = -1;
    let n = nums.length;

    for (let i = 0; i < n; i++){
        if (nums[i] === target) {
            if (first === -1) first = i;
            last = i;
        }
    }
    return [first, last];
}

console.log(searchRange(nums, target));