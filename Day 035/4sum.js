// Four some problem

let nums = [2, 2, 2, 2, 2];
let target = 8;

// *** Brute force Solution ***

const fourSumBruteForce = function(nums, target) {
    let n = nums.length;
    let set = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                for (let l = k + 1; l < n; l++) {
                    let sum = nums[i] + nums[j] + nums[k] + nums[l];
                    
                    if (sum === target) {
                        let temp = [nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a - b);
                        set.add(temp.toString());
                    }
                }
            }
        }
    }

    let ans = Array.from(set).map(str => str.split(',').map(Number));
    return ans;
};

console.log(fourSumBruteForce(nums, target));



// *** Better Solution ***


const fourSumBetter = function(nums,target){
    let n = nums.length;
    let set = new Set();

    for(let i = 0; i < n; i++){
        for (let j = i+1; j < n; j++){
            let hashset = new Set();
            for (let k = j+1; k < n; k++){
                let sum = nums[i] + nums[j] + nums[k]
                let fourth = target - sum;
                if (hashset.has(fourth)){
                    let temp = [nums[i],nums[j],nums[k],fourth];
                    temp.sort((a,b)=> a-b);
                    set.add(temp.toString());
                }
                hashset.add(nums[k]);
            }
        }
    }
    let ans = Array.from(set).map(str => str.split(',').map(Number));
    return ans;
}


console.log(fourSumBetter(nums,target));



// *** Optimal Solution ***


const fourSumOptimal = function (nums,target){
    let n = nums.length;
    let ans = [];
    nums.sort((a,b)=>a-b)

    for(let i = 0; i < n; i++){
        if (i > 0 && nums[i] === nums[i-1]) continue;
        for (let j = i+1; j< n; j++){
            if (j != (i+1) && nums[j] == nums[j-1]) continue;
            let k = j+1;
            let l = n-1;
            while(k < l){
                sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target){
                    temp = [nums[i],nums[j],nums[k],nums[l]];
                    ans.push(temp);
                    while (k < l && nums[k] == nums[k-1]) k++;
                    while (k < l && nums[l] == nums[l+1]) l--;
                }
                else if (sum < target) k++;
                else l--;
            }
        }
    }
    return ans;
}


console.log(fourSumOptimal(nums,target))