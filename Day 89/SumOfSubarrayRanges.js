// Sum of subarray ranges

/*
    Bruteforce solution
*/

const sumOfSubarrayBruteForce = function(nums){
    let sum = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++){
        let longest = nums[i];
        let smallest = nums[i];
        for (let j = i+1; j < n; j++){
            longest = Math.max(longest, nums[j]);
            smallest = Math.min(smallest, nums[j]);
            sum += longest - smallest;
        }
    }
    return sum;
}



/*
    Optimal solution
*/

const sumOfMax = function(nums) {
    let n = nums.length;
    let total = 0;
    let stack = [];
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            stack.pop();
        }
        left[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
        stack.push(i);
    }

    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop();
        }
        right[i] = stack.length ? stack[stack.length - 1] - i : n - i;
        stack.push(i);
    }

    for (let i = 0; i < n; i++) {
        total += nums[i] * left[i] * right[i];
    }

    return total;
}

const sumOfMin = function(nums) {
    let n = nums.length;
    let total = 0;
    let stack = [];
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
            stack.pop();
        }
        left[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
        stack.push(i);
    }

    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
            stack.pop();
        }
        right[i] = stack.length ? stack[stack.length - 1] - i : n - i;
        stack.push(i);
    }

    for (let i = 0; i < n; i++) {
        total += nums[i] * left[i] * right[i];
    }

    return total;
}

const sumOfSubarrayOptimal = function(nums){
    return sumOfMax(nums) - sumOfMin(nums);
}


let nums = [1,2,3];
console.log(sumOfSubarrayOptimal(nums));