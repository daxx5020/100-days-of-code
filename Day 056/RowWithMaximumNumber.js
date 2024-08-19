// Row with maximum number

let arr = [[0, 1, 1, 1],[0, 0, 1, 1],[1, 1, 1, 1],[0, 0, 0, 0]];

/*
    Bruteforce Solution
*/


const rowWithMaxNumberBruteForce = function (arr){
    let cnt_max = 0;
    let index = -1;

    for (let i = 0; i < arr.length; i++){
        let cnt_ones = 0;
        for (let j = 0; j < arr[0].length; j++){
            cnt_ones += arr[i][j];
        }
        if (cnt_ones > cnt_max){
            cnt_max = cnt_ones;
            index = i;
        }
    }
    return index;
}

console.log(rowWithMaxNumberBruteForce(arr));



/*
    Optimal Solution
*/

const lowerBound = function (arr,n,x){
    let low = 0;
    let high = n - 1;
    let ans = n;
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= x){
            ans = mid;
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return ans;
}

const rowWithMaxNumberOptimal = function (arr){
    let n = arr.length;
    let m = arr[0].length;
    let cnt_max = 0;
    let index = -1;
    for (let i = 0; i < n; i++){
        let cnt_ones = m - lowerBound(arr[i], m, 1);
        if (cnt_ones > cnt_max){
            cnt_max = cnt_ones;
            index = i;
        }
    }
    return index;
}

console.log(rowWithMaxNumberOptimal(arr));