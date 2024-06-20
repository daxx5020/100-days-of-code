// Find max sum in subarray


let arr = [4, 3, 1, 5, 6]

const maxSumSubarray = function(arr){
    let temp = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){
            temp.push(arr[i]);
            console.log(temp);
            break;

        }
    }
}


maxSumSubarray(arr);