// Max consecutive ones III

/*
    Bruteforce solution
*/

const longestOnes = function(nums,k){
    let maxLen = 0;
    let l = 0;
    let r = 0;
    let zeroes = 0;

    while(r < nums.length){
        if (nums[r] === 0){
            zeroes++;
        }

        while(zeroes > k){
            if(nums[l] === 0){
                zeroes--;
            }
            l++;
        }
        
        let len = r - l + 1;
        maxLen = Math.max(maxLen, len);
        
        r++;
    }
    return maxLen;
}



/*
    Optimal solution
*/


const longestOnesOptimal = function(nums,k){
    let maxLen = 0;
    let l = 0;
    let r = 0;
    let zeroes = 0;

    while(r < nums.length){
        if (nums[r] === 0){
            zeroes++;
        }

        if (zeroes > k){
            if (nums[l] == 0){
                zeroes--;
            }
            l++;
        }

        if (zeroes <= k){
            len = r - l + 1;
            maxLen = Math.max(maxLen, len);
        }
        r++;
    }
    return maxLen;
}


let nums = [1,1,1,0,0,0,1,1,1,1,0];
let k = 2;

console.log(longestOnesOptimal(nums,k));