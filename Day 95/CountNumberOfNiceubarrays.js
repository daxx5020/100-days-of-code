// Count number of nice subarrays

const numberOfSubarrays = function(nums,k){
    const atMost = (k) => {
        if (k < 0) return 0;

        let n = nums.length;
        let sum = 0;
        let l = 0;
        let cnt = 0;

        for (let r = 0; r < n; r++) {
            sum += nums[r] % 2;

            while (sum > k) {
                sum -= nums[l] % 2;
                l++;
            }

            cnt += (r - l + 1);
        }

        return cnt;
    };

    return atMost(k) - atMost(k - 1);
}

let nums = [1,1,2,1,1]
let k = 3

console.log(numberOfSubarrays(nums, k));