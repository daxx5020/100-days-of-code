// Fruits into baskets


/*
    Bruteforce solution
*/

const totalFruits = function(arr){
    let n = arr.length;
    let maxLen = 0;
    
    for (let i = 0; i < n; i++){
        let st = new Set();
        let currentLen = 0;

        for (let j = i; j < n; j++){
            st.add(arr[j]);
            
            if (st.size <= 2 ){
                currentLen = j-i+1
                maxLen = Math.max(maxLen,currentLen);
            }
            else{
                break;
            }
        }
    }
    return maxLen;
}


/*
    Better solution
*/


const totalFruitsBetter = function(arr){
    let l = 0;
    let r = 0;
    let maxLen = 0;
    let mpp = new Map();
    let k = 2;

    while (r < arr.length) {
        mpp.set(arr[r], (mpp.get(arr[r]) || 0) + 1);

        while (mpp.size > k) {
            mpp.set(arr[l], mpp.get(arr[l]) - 1);
            if (mpp.get(arr[l]) === 0) {
                mpp.delete(arr[l]);
            }
            l++;
        }

        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    return maxLen;
}

/*
    Optimal Solution
*/


const totalFruitsOptimal = function(arr){
    let l = 0;
    let r = 0;
    let maxLen = 0;
    let mpp = new Map();
    let k = 2;

    while (r < arr.length) {
        mpp.set(arr[r], (mpp.get(arr[r]) || 0) + 1);

        if (mpp.size > k) {
            mpp.set(arr[l], (mpp.get(arr[l]) || 0) - 1);
            if (mpp.get(arr[l]) === 0) {
                mpp.delete(arr[l]);
            }
            l++;
        }

        maxLen = Math.max(maxLen, r - l + 1);

        r++;
    }
    return maxLen;

}


let arr = [3, 1, 2, 2, 2, 2]
console.log(totalFruitsOptimal(arr));