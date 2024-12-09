// Single Number

let nums = [-1,-1,-2];

const singleNumber = function (nums){
    let n = nums.length;
    let map = new Map();

    if (n == 1){
        return nums[0];
    }

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0 ) + 1 )
    }

    for (const [key, value] of map.entries()) {
        if (value === 1){
            return key;
        }    
    }
    return map;
}

console.log(singleNumber(nums))