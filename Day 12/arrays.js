//majority element

let arr = [1,1,2,2,2,2,3,3]

const majorityElement = function (arr){
    let mpp = new Map();
    for (let i=0; i < arr.length; i++){
        if(mpp.has(arr[i])){
            mpp.set(arr[i],mpp.get(arr[i])+1)
        }
        else{
            mpp.set(arr[i],1)
        }
    }
    
    for (let [key,value] of mpp){
        if (value > Math.floor(arr.length/2)){
            return key;
        }
    }
    return -1;
}


console.log(majorityElement(arr));



// *** Moore's voting algorithm ***


let arr2 = [1,2,2,5,5,1,5,1,4,5,5,5,4,5,5,5,5]

const majorityElementMoore = function (arr){
    let cnt = 0;
    let element  = 0;

    for (let i = 0; i < arr.length; i++) {
        if (cnt == 0){
            cnt = 1;
            element = arr[i];
        }
        else if(arr[i] == element ){
            cnt++;
        }
        else{
            cnt--
        }
    }

    let cnt1 = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == element ) cnt1++;
    }
    if (cnt1 > Math.floor(arr.length/2)){
        return element;
    }
    return -1;
}

console.log(majorityElementMoore(arr2))




// *** Kadane's Algoritham ***

// find maximum sum of subarray and return the sum

arr3 = [5,2,-1,-3,6,-5,5,3,-2,1,1]

const maxSubarraySum = function (arr){
    let sum = 0;
    let maxi = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    if (sum > maxi){
        maxi = sum;
    }

    if(sum < 0 ){
        sum = 0;
    }

    return maxi;
}

console.log(maxSubarraySum(arr3));