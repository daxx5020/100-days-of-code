// let nums = [1,2,3,4,5,6,7]
// let k = 3
// var rotate = function(nums, k) {
//     while(k >= 1){
//         let lastElement = nums.pop();
//         nums.unshift(lastElement);
//         k--;
//     }
//     return nums;
// };

// console.log(rotate(nums,k))


var rotate = function(nums, k) {
    k = k % nums.length;
   if (k === 0) return;

   reverse(nums, 0, nums.length - 1);
   reverse(nums, 0, k - 1);
   reverse(nums, k, nums.length - 1);
};


var reverse = function(nums, start, end) {
   while (start < end) {
       [nums[start], nums[end]] = [nums[end], nums[start]];
       start++;
       end--;
   }
};