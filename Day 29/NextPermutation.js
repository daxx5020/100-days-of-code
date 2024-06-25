// Next permutation

let nums = [1,2,3]

const nextGreaterPermutation = function(nums) {
    let ind = -1;
    const n = nums.length;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            ind = i;
            break;
        }
    }

    if (ind === -1) {
        nums.reverse();
        return nums;
    }

    for (let i = n - 1; i > ind; i--) {
        if (nums[i] > nums[ind]) {
            [nums[i], nums[ind]] = [nums[ind], nums[i]];
            break;
        }
    }

    reverseArray(nums, ind + 1, n - 1);

    return nums;
}

const reverseArray = function(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}



console.log(nextGreaterPermutation(nums));

 