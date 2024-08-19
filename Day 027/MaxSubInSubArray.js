// Find max sum in subarray


let arr = [4, 3, 1, 5, 6]

const maxSumSubarray = function(arr){
    let maxi = -Infinity;
    for (let i = 0; i < arr.length; i++){
        let sum = 0;
        for (let j = i; j < arr.length; j++){
            sum += arr[j];
            maxi = Math.max(maxi, sum);
        }
    }
    return maxi;
}


console.log(maxSumSubarray(arr));


const maxSubArrayOptimal = function (arr){
    let sum = 0;
    let maxi = -Infinity;
    for (let i = 0; i < arr.length; i++){
        sum = sum += arr[i];

        if (sum > maxi){
            maxi = sum;
        }

        if(sum < 0){
            sum = 0;
        }
    }
    return sum
}

console.log(maxSubArrayOptimal(arr))