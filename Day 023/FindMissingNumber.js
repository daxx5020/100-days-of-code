// Find missing number from array.


let nums = [3,0,1];

const findMissingNumber = function (nums){
    let n = nums.length;
    let hash = new Array(n+1).fill(0);
    
    for (let i = 0; i < n; i++) {
        hash[nums[i]]++;
    }

    for (let i = 0; i < hash.length; i++){
        if (hash[i] == 0){
            return i;
        }
    }

    return -1;

}


console.log(findMissingNumber(nums))