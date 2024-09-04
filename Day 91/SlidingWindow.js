// Sliding window maximum

/*
    Bruteforce solution
*/

const maxSlidingWindowBruteForce = (nums, k) => {
    let list = [];
    let n = nums.length;

    for (let i = 0; i <= n - k; i++){
        let maxi = nums[i];
        for (let j = i; j < i + k; j++){
            maxi = Math.max(maxi,nums[j]);
        }
        list.push(maxi)
    }
    return list;
};


/*
    Optimal solution
*/

const maxSlidingWindowOptimal = function(nums,k){
    let deque = [];
    let result = [];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (deque.length > 0 && deque[0] === i - k) {
            deque.shift();
        }

        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}


let nums = [1,3,-1,-3,5,3,6,7]
let k = 3
console.log(maxSlidingWindowOptimal(nums,k));