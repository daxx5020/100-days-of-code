// Find peak element from array

let nums = [1,2,1,3,5,6,4];


/*
    Bruteforce Solution
*/

const findPeakElementBruteForce = function (nums){
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if ((i == 0 || nums[i-1] < nums[i]) && (i == n-1 || nums[i] > nums[i+1])){
            return i;
        }
    }
    return -1;
}

console.log(findPeakElementBruteForce(nums));


/*
    Optimal Solution
*/

const findPeakElementOptimal = function(nums){
    let n = nums.length;
    if (n === 1) return 0;
    if (nums[0] > nums[1]) return 0;
    if (nums[n-1] > nums[n-2]) return n-1;

    let low = 1;
    let high = n-2;
    while (low <= high){
        let mid = Math.floor((low+high)/2);
        if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]){
            return mid;
        }
        else if(nums[mid] > nums[mid-1]){
            low = mid +1;
        }
        else{
            high = mid -1;
        }

    }

}

console.log(findPeakElementOptimal(nums));