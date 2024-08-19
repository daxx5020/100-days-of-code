// Search insert position

let nums = [-1,3,5,6];
let target = 0;

// const searchInsertPositionBruteforce  = function (nums,target) {
//     let n = nums.length;
//     let ans = 0;

//     for (let i = 0; i < n; i++) {
//         if (nums[i] === target){
//             return i;
//         }
//         else if (nums[i] < target){
//             ans = i + 1 ;
//         }
//     }
//     return ans;
// }

// console.log(searchInsertPositionBruteforce(nums,target));



const searchInsertPositionOptimal = function(nums,target){
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    while (low <= high){
        let mid = Math.floor((high + low)/2);

        if (nums[mid] === target){
            return mid;
        }
        else if(nums[mid] < target){
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return low;
}

console.log(searchInsertPositionOptimal(nums,target));