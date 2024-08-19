/*
    Find  Number of sub arrays with sum k

*/


// *** Brute Force solution ***


let arr = [1,5,1,7,-5,-3,1,-7,-1,5,6,5]
let s = 5;


const numberOfSubArray = function(arr,s){
    let cnt = 0;

    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){
            let sum = 0;
            for (let k = i; k <= j; k++){
                sum += arr[k];
            }
            if (sum == s){
                cnt++;
            }
        }
    }
    return cnt;
}


console.log(numberOfSubArray(arr,s))



/*
    *** Better Solution ***

    Making above algoritham better with remove extra 1 k loop.
*/



const numberOfSubArrayBetter = function(arr,s){
    let cnt = 0;

    for (let i = 0; i < arr.length; i++){
        let sum = 0;
        for (let j = i; j < arr.length; j++){
            sum += arr[j]
            if (sum == s){
                cnt++;
            }
        }
    }
    return cnt;
}


console.log(numberOfSubArray(arr,s))



/*
    *** Optimal Solution ***
*/


const numberOfSubArrayOptimal = function(arr,s){
    let mpp = new Map();
    mpp.set(0,1);
    let preSum = 0;
    let cnt = 0;
    
    for(let i = 0; i < arr.length; i++){
        preSum += arr[i];
        let remove = preSum - s;
        if (mpp.has(remove)){
            cnt += mpp.get(remove);
        }
        if(mpp.has(preSum)){
            mpp.set(preSum, mpp.get(preSum) + 1)
        }
        else{
            mpp.set(preSum,1)
        }
    }
    return cnt;
}

console.log(numberOfSubArrayOptimal(arr,s))