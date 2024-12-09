// Move all zeroes to the end of the array


// *** Bruteforce Solution ***

let nums = [0,1,0,3,12];

const moveAllZeroes = function(nums){
    let tempArr = [];
    let n = nums.length;
    for (let i = 0; i < n; i++){
        if (nums[i] !== 0 ){
            tempArr.push(nums[i]);
        }
    }

    let tempLength = tempArr.length;

    for (let i = 0; i < tempLength; i++){
        nums[i] = tempArr[i];
    }

    for (let i = tempLength; i < n; i++){
        nums[i] = 0;
    }

    return nums;
}

console.log(moveAllZeroes(nums))




// *** Optimal Solution ***

const moveAllZeroesOptimal = function(nums){
    let j = -1;
    for (let i = 0; i < nums.length;i++){
        if (nums[i] == 0){
            j = i;
            break;
        }
    }

    if (j === -1) return nums;

    for (let i = j+1; i < nums.length; i++){
        if (nums[i] !== 0){
            [nums[i],nums[j]] = [nums[j], nums[i]]
            j++;
        }
    }
    return nums;
}

console.log(moveAllZeroesOptimal(nums));