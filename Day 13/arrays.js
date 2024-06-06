// Best time to buy and sell sticks. 

let prices = [4,3,1,5,7,5,2,3]

const maximumProfit = function (prices){
    let mini = prices[0];
    let maxProfit = 0;
    let n = prices.length;

    for (let i = 0; i < n; i++){
        let cost = prices[i] - mini;
        maxProfit = Math.max(maxProfit, cost);
        mini = Math.min(mini, prices[i]);
    }
    return maxProfit;
}


console.log(maximumProfit(prices));



//Rearrange the array with positives and negatives

//   *** BruteForce Method ***

let arr = [8,-3,-5,4,5,6,-6,-3]

const rearrageArray = function(arr){
    let positiveElements = [];
    let negativeElements = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0 ){
            positiveElements.push(arr[i])
        }
        else if(arr[i] < 0 ){
            negativeElements.push(arr[i]);
        }
    }
    for (i = 0; i < arr.length/2;i++){
        arr[2*i] = positiveElements[i];
        arr[2*i+1] = negativeElements[i];
    }
    return arr;
}


console.log(rearrageArray(arr));



//   *** Better solution ***

const rearrageArrayBetter = function (arr){
    let n = arr.length;
    let positiveIndex = 0;
    let negativeIndex = 1;
    let ans = Array(n).fill(0);

    for (let i=0; i < n; i++){
        if (arr[i] < 0 ){
            ans[negativeIndex] = arr[i];
            negativeIndex += 2;
        }
        else{
            ans[positiveIndex] = arr[i];
            positiveIndex += 2;
        }
    }
    return ans;
}

console.log(rearrageArrayBetter(arr));


//Rearrange the array with diffrent count of positive and negrative numbers

let array = [8,-3,-5,4,5,6,-6,-3,-6,-10,-9]

const alternateNumber = function (arr){
    let pos = [];
    let neg = [];
    let n = arr.length;

    for (let i = 0; i < n; i++){
        if (arr[i] < 0 ){
            neg.push(arr[i]);
        }
        else{
            pos.push(arr[i]);1
        }
    }

    if (pos.length > neg.length){
        for (let i = 0; i < neg.length; i++){
            arr[2*i] = pos[i];
            arr[2*i+1] = neg[i];
        }
        let index = neg.length *2;
        for (let i = neg.length; i < pos.length;i++){
            arr[index] = pos[i];
            index++;
        }
    }
    else{
        for (let i = 0; i < pos.length; i++){
            arr[2*i] = pos[i];
            arr[2*i+1] = neg[i];
        }
        let index = pos.length * 2;
        for (let i = pos.length; i < neg.length; i++){
            arr[index] = neg[i];
            index++;
        }
    }
    return arr;
}

console.log(alternateNumber(array));