// Find Majority Element and give output in sorted manner

// *** Bruteforce Solution ***

let arr =  [-1, -1, 2, 0, 1]

const majorityElement = function (arr){
    let ls = [];
    let mpp = new Map();
    let n = arr.length;
    let mini = Math.floor((n/3) +1)

    for (let i = 0; i <n; i++){
        if(mpp.has(arr[i])){
            mpp.set(arr[i],mpp.get(arr[i])+1)
        }
        else{
            mpp.set(arr[i],1)
        }

        if (mpp.get(arr[i]) == mini){
            ls.push(arr[i]);
        }
        if (ls.length == 2) break;
    }
    ls.sort((a, b) => a-b)
    return ls;
}


console.log(majorityElement(arr))




// *** Better Solution  ***


let majorityElementBetter = function (arr){
    let cnt1 = 0;
    let cnt2 = 0;
    let el1 = Number.MIN_VALUE;
    let el2 = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {
        if (cnt1 == 0 && el2 != arr[i]){
            cnt1 = 1;
            el1 = arr[i];
        }
        else if(cnt2 == 0 && el1 != arr[i]){
            cnt2 = 1;
            el2 = arr[i];
        }
        else if(arr[i] == el1) cnt1++;
        else if(arr[i] == el2) cnt2++;
        else{
            cnt1--;
            cnt2--;
        }
    }

    let ls = [];
    cnt1 = 0;
    cnt2 = 0;
    for(let i = 0; i < arr.length; i++){
        if (el1 == arr[i]) cnt1++;
        if (el2 == arr[i]) cnt2++;
    }
    let mini = Math.floor((arr.length/3) + 1);
    if(cnt1 >= mini) ls.push(el1);
    if(cnt2 >= mini) ls.push(el2);
    ls.sort((a, b) => a-b)
    return ls;

}


console.log(majorityElementBetter(arr))



// *** Optimal Solution ***


 const majorityElementOptimal = function (arr){
    let ans = [];
    if (arr.length < 3) return ans;

    arr.sort((a,b) => a-b)
    for (let i = 0; i < arr.length - 2; i++){
        if (i > 0 && arr[i] == arr[i-1]) continue;
        let j = i+1;
        let k = arr.length-1;
        while (j < k){
            let sum = arr[i] + arr[j] + arr[k];
            if (sum < 0){
                j++;
            }
            else if(sum > 0){
                k--;
            }
            else{
                ans.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;
                
                while ( j < k && arr[j] == arr[j-1]) j++;
                while ( j < k && arr[k] == arr [k+1]) k--;
            }
        }
    }
    return ans;
 }

 console.log(majorityElementOptimal(arr))