// find length of subarray which suarrays total sum is given

let arr = [1,2,3,1,1,4,5,6,1,5,4,1,3,2];
let k = 6;

const longestSubarrauWithSum = function(arr,k){
    let right = 0;
    let left = 0;
    let sum = arr[0];
    let n = arr.length;
    let maxLength = 0;

    while(right < n){
        while(left <= right && sum >k){
            sum -= arr[left];
            left++;
        }
        if (sum==k){
            maxLength = Math.max(maxLength, right-left+1)
        }
        right++;
        if(right < n) {
            sum += arr[right]
        };
    }
    return maxLength;
}


console.log(longestSubarrauWithSum(arr,k))