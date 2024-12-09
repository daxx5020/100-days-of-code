// Find majority element from array

let nums = [2,2,1,1,1,2,2]

const majorityElement = function (nums){
    let map = new Map();
    let n = nums.length

    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    for (let [key,value] of map.entries()){
        if (value > Math.floor(n/2)){
            return key;
        }
    }
}



console.log(majorityElement(nums))