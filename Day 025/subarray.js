// Find the longest sub array with sum k


let arr = [10, 5, 2, 7, 1, 9]
let k = 15;

const subArrays = function (arr, k) {
    let n = arr.length;
    let len = 0;

    for (let i = 0; i< n; i++){
        let sum = 0;
        for (let j = i; j < n; j++){
            sum += arr[j];
            if (sum == k){
                len = Math.max(len, j-i+1)
            }
        }
    }
    return len;
}


console.log(subArrays(arr,k));




// Optimal solution

const longestSubArrayWithSumK = function(arr, k) {
    let n = arr.length;
    let sum = 0;
    let maxLength = 0;
    let prefixSumMap = {};

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        if (sum === k) {
            maxLength = i + 1;
        }

        if (prefixSumMap.hasOwnProperty(sum - k)) {
            maxLength = Math.max(maxLength, i - prefixSumMap[sum - k]);
        }

        if (!prefixSumMap.hasOwnProperty(sum)) {
            prefixSumMap[sum] = i;
        }
    }
    return maxLength;
};

console.log(longestSubArrayWithSumK(arr, k));
