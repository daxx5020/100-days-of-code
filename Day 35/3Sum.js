// 3 sum problem

// *** Brute force solution ***

nums = [-1,0,1,2,-1,-4]

const threeSum = function (nums){
    let ans = [];
    let n = nums.length;
    for (let i = 0; i < n; i++){
        for (let j = i+1; j < n;j++){
            for (let k = j+1; k < n; k++){
                if (nums[i] + nums[j] + nums[k] == 0){
                    let temp = [nums[i],nums[j],nums[k]];
                    temp.sort((a,b)=> a-b)
                    ans.push(temp);
                }
            }
        }
    }
    let set  = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
} 

console.log(threeSum(nums))



// *** Better solution ***


const threeSumBetter = function(nums){
    let n = nums.length;
    let ans = [];

    for(let i = 0; i < n; i++){
        let hashset = new Set();
        for (let j = i+1; j < n; j++){
            let third = -(nums[i]+nums[j]);
            if (hashset.has(third)){
                let temp = [nums[i],nums[j],third]
                temp.sort((a,b)=>a-b);
                ans.push(temp);
            }
            hashset.add(nums[j]);
        }
    }
    let set  = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}


console.log(threeSumBetter(nums))




// *** Optimal Solution ***


const threeSumOptimal = function(nums){
    let n = nums.length;     
    let ans = [];
    nums.sort((a,b)=> a-b);
    for (let i = 0; i< n; i++){
        if (i !== 0 && nums[i] === nums[i-1]) continue;

        let j = i+1;
        let k = n-1;

        while (j<k){
            let sum = nums[i] + nums[j] + nums[k];
            if (sum < 0){
                j++;
            }
            else if(sum > 0){
                k--;
            }
            else{
                let temp = [nums[i],nums[j],nums[k]]
                ans.push(temp);
                j++;
                k--;

                while (j < k && nums[j] === nums[j-1]) j++;
                while (j < k && nums[k] === nums[k+1]) k--;
            }
        }
    }
    return ans;
}


console.log(threeSumOptimal(nums))