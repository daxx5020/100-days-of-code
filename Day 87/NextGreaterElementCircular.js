// Next Greater element in circular

/*
    Bruteforce solution
*/

const nextGreaterElement = function(nums){
    let nge = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < i + nums.length; j++){
             if (nums[j % nums.length] > nums[i]) {
                nge[i] = nums[j % nums.length];
                break;
            }
        }
    }
    return nge;
}



/*
    Optimal solution
*/

const nextGreaterElementOptimized = function(nums){
    let nge = new Array(nums.length).fill(-1);
    let stack = [];

    for (let i = 0; i < 2 * nums.length; i++) { 
        let num = nums[i % nums.length];

        while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
            let index = stack.pop();
            nge[index] = num;
        }
        if (i < nums.length) {
            stack.push(i);
        }
    }
    return nge;
}

