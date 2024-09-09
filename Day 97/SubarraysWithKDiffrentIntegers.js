// Subarrays with k diffrent integers

/*
    Bruteforce solution
*/

const subarraysWithKDistinctBruteForce = function(nums,k){
    let n = nums.length;
    let cnt = 0;
    
    for (let i = 0; i < n; i++){
        let mpp = new Map();
        for (let j = i; j < n; j++){
            mpp.set(nums[j], mpp.has(nums[j]) ? mpp.get(nums[j]) + 1 : 1);

            if (mpp.size == k){
                cnt++;
            }

            else if(mpp.size > k){
                break;
            }
        }
    }
    return cnt;
}

/*
    Optimal solution
*/

const findSubarrayLessOeEqualK = function(nums,k){
    let n = nums.length;
    let cnt = 0;
    let l = 0; let r = 0;
    let mpp = new Map();

    while(r < n){
        mpp.set(nums[r], mpp.has(nums[r]) ? mpp.get(nums[r]) + 1 : 1);

        while(mpp.size > k){
            mpp.set(nums[l], mpp.get(nums[l]) - 1);
            
            if (mpp.get(nums[l]) == 0){
                mpp.delete(nums[l]);
            }
            l = l + 1;
        }

        cnt = cnt + (r - l + 1);
        r = r + 1;
    }

    return cnt;    
}

const subarraysWithKDistinct = function(nums,k){
    return findSubarrayLessOeEqualK(nums,k) - findSubarrayLessOeEqualK(nums,k-1);
}

let nums = [1,2,1,2,3]
let k = 2
console.log(subarraysWithKDistinct(nums,k))