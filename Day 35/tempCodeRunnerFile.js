let nums = [2,2,2,2,2]
let target = 8


const fourSumBruteForce = function (nums,target){
    let n = nums.length;
    let set = new Set();

    for (let i = 0; i < n; i++){
        for (let j = i+1; j < n; j++){
            for (let k = j+1; k <n; k++){
                for (let l = k+1; l < n; l++){
                    let sum = nums[i] + nums[j] + nums[k] + nums[l];
                    
                    if (sum === target){
                        let temp = [nums[i],nums[j],nums[k],nums[l]];
                        temp.sort((a,b)=>a-b);
                        set.add(temp);
                    }
                }
            }
        }
    }
    let ans = Array.from(set);
    return ans;
}

console.log(fourSumBruteForce(nums,target))