let nums = [1,1,0,1,1,1];
var findMaxConsecutiveOnes = function(nums) {
    let left = 0;
    let ans = -1;
    let window = 0;

    for (let right = 0; right < nums.length; right++){
        window += nums[right]

        while(right-left+1 != window ){
            window -= nums[left];
            left++;
        }

        ans = Math.max(ans, right-left+1)
    }
    return ans
};

console.log(findMaxConsecutiveOnes(nums))