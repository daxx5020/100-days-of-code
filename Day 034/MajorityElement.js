// Majority Elements

let nums = [3,2,3]

const majorityElement = function (nums){
    let n = nums.length;
    let mpp = new Map();
    let ans = [];
    for (let i = 0; i < n; i++){
        mpp.set(nums[i],(mpp.get(nums[i]) || 0) + 1);
    }

    for (let [key,value] of mpp.entries()){
        if (value > Math.floor(n/3)){
            ans.push(key);
        }
    }
    return ans;
}

console.log(majorityElement(nums));