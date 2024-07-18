// Split array in largest sum

let nums = [7,2,5,10,8]
let k = 2

const count = function(nums, pages){
    let students = 1;
    pagesStudent = 0;
    for (let i = 0; i < nums.length; i++){
        if (pagesStudent + nums[i] <= pages){
            pagesStudent += nums[i];
        }
        else{
            students += 1;
            pagesStudent = nums[i];
        }
    }
    return students;
}


const splitArray = function (nums, k){
    let n = nums.length;
    if (k > n) return -1;
    let low = Math.max(...nums);
    let high = nums.reduce((sum, current) => sum + current, 0);
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        let students = count(nums, mid);
        if (students > k){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return low;
}

console.log(splitArray(nums,k));