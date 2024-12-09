// find missing numbers in the array

let arr= [1,2,3,5,6];

const missingNumber = function(arr){
    let N = arr.length;
    let xor1 = 0
    let xor2 = 0
    let n = N-1;

    for (let i = 0; i < n; i++){
        xor2 = xor2 ^ arr[i];
        xor1 = xor1 ^ (i+1);
    }
    xor1 = xor1 ^ N;
    return xor1 ^ xor2;
}


console.log(missingNumber(arr));



//Maximum consucutive ones

let arr2 = [1,1,0,2,1,1,1,1,3,0,1,1]

const maximumConsecutiveOnes = function (arr){
    let max = 0;
    let count = 0;

    for (let i=0; i<arr.length; i++){
        if(arr[i] == 1){
            count++;
            max = Math.max(max,count);
        }
        else{
            count = 0;
        }
    }
    return max;
}


console.log(maximumConsecutiveOnes(arr2))


//find the number which have only one time in array


let arr3 = [1,1,2,2,3,3,4]

const findSingleNumber = function (arr){
    let xor = 0;

    for (let i=0; i< arr.length; i++){
        xor = xor ^ arr[i];
    }
    return xor;
}


console.log(findSingleNumber(arr3))
