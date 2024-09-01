// Sum of subarray minimums

/*
    Bruteforce solution
*/

const subarraySum = function(arr){
    let n =  arr.length;
    let sum = 0;

    for(let i = 0; i < n; i++) {
        let mini = arr[i];
        for (let j = i; j < n; j++){
            mini = Math.min(mini,arr[j]);
            sum = sum + mini;
        }
    }
    return sum;
}

let arr = [3,1,2,4];
console.log(subarraySum(arr));


/*
    Optimal solution
*/

const findNSE = function(arr){
    let st = [];
    let n = arr.length;
    let nse = new Array(n).fill(n);
    
    for (let i = 0; i < n; i++){
        while(st.length !== 0 && arr[st[st.length-1]] > arr[i]){
            nse[st.pop()] = i;
        }
        st.push(i);
    }
    return nse;
}

const findPSE = function(arr){
    let n = arr.length;
    let st = [];
    let pse = new Array(n).fill(-1);

    for (let i = n - 1; i >= 0; i--){
        while(st.length !== 0 && arr[st[st.length-1]] >= arr[i]){
            pse[st.pop()] = i;
        }
        st.push(i);
    }
    return pse;
}

const subarraySumOptimized = function(arr){
    let nse = findNSE(arr);
    let pse = findPSE(arr);
    let total = 0;
    let n = arr.length;
    const MOD = 1e9 + 7;

    for (let i = 0; i < n; i++){
        let left = i - pse[i];
        let right = nse[i] - i;

        total = (total + (right * left * arr[i])) % MOD;
    }
    return total;
}