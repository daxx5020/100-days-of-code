// Rearrange array elements by sign


// *** Brute force Solution ***

let nums = [3,1,-2,-5,2,-4];

// const RearrangeArray = function (nums){
//     let positives = [];
//     let negatives = [];
//     for (let i =0; i < nums.length; i++){
//         if (nums[i] > 0 ){
//             positives.push(nums[i])
//         }
//         else{
//             negatives.push(nums[i])
//         }
//     }

//     for (let i = 0; i < nums.length / 2; i++) {
//         nums[2 * i] = positives[i];
//         nums[2 * i + 1] = negatives[i];
//     }
//     return nums;

// }

// console.log(RearrangeArray(nums))



// *** Better Solution *** 

const RearrangeArrayBetter = function(nums){
    let n = nums.length;
    let ans = Array(n).fill(0);
    let posotiveIndex = 0;
    let negativesIndex = 1;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] < 0){
            ans[negativesIndex] = nums[i];
            negativesIndex += 2;
        }
        else{
            ans[posotiveIndex] = nums[i];
            posotiveIndex += 2;
        }
    }
    return ans;
}

console.log(RearrangeArrayBetter(nums));