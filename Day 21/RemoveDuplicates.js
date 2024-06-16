// Remove duplicates from the sorted array

// Simple approch to solve the problem

let nums = [1,1,2]

const removeDuplicates = function (nums){
    let set = new Set(nums);
    let uniqueArr = Array.from(set);

    return uniqueArr.length;
}

console.log(removeDuplicates(nums))



// Leetcode not accepting this so here is the another solution

var removeDuplicatesSecond = function(nums) {
    let set = new Set(nums);
    let uniqueArr = Array.from(set);
    for (let i = 0; i < uniqueArr.length; i++) {
        nums[i] = uniqueArr[i];
    }
    return uniqueArr.length;
};

console.log(removeDuplicatesSecond(nums))



// *** Optimal solution ***


const removeDuplicatedOptimal = function (nums){
    let i = 0;
    
    for (let j = 0; j < nums.length; j++ ){4
        if (nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
}


console.log(removeDuplicatedOptimal(nums))