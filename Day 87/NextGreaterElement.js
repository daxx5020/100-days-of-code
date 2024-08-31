// Find next greater element

const nextGreaterElement = function(nums1, nums2) {

    const nextGreaterMap = new Map();
    const stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        const current = nums2[i];

        while (stack.length > 0 && stack[stack.length - 1] <= current) {
            stack.pop();
        }

        if (stack.length === 0) {
            nextGreaterMap.set(current, -1);
        } else {
            nextGreaterMap.set(current, stack[stack.length - 1]);
        }

        stack.push(current);
    }

    const result = nums1.map(num => nextGreaterMap.get(num));
    return result;
};

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));