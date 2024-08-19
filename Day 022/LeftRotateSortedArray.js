// Left rotate the sorted array by 1 place

// *** Bruteforce Method ***


let nums = [1,2,3,4,5,6,7];


const leftRotateArray = function(nums){
    let tempArrr = new Array(k);
    let n = nums.length;

    for (let i = 1; i < n; i++){
        tempArrr[i-1] = nums[i];
    }
    tempArrr[n-1] = nums[0];

    return tempArrr;
}


console.log(leftRotateArray(nums))



// *** Optimal Method *** 


const leftRotateArrayOPtimal = function(nums){
    let x = nums[0];
    let n = nums.length;
    
    for (let i = 0; i < n-1; i++){
        nums[i] = nums[i+1];
    }
    nums[n-1] = x;

    return nums;
}


console.log(leftRotateArrayOPtimal(nums));