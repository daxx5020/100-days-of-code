// Binary subarrays with sum

var numSubarraysWithSum = function(nums, goal) {

    const atMost = (goal) => {
        if (goal < 0) return 0;

        let n = nums.length;
        let sum = 0;
        let l = 0;
        let cnt = 0;

        for (let r = 0; r < n; r++) {
            sum += nums[r];

            while (sum > goal) {
                sum -= nums[l];
                l++;
            }

            cnt += (r - l + 1);
        }

        return cnt;
    };

    return atMost(goal) - atMost(goal - 1);
};


let nums = [1,0,1,0,1]
let goal = 2
console.log(numSubarraysWithSum(nums,goal));