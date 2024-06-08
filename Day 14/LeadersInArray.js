//Leaders in an array

//  *** Bruteforce Solution ***


let arr = [10,22,12,3,0,6]

const leadersArray = function (arr){
    let ans = [];
    for (let i = 0; i < arr.length; i++){
        let leader = true;
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] > arr[i]){
                leader = false;
                break;
            }
        }
        if (leader == true){
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(leadersArray(arr));




//  *** Optimal Solution ***


const leadersArrayOptimal = function (arr){
    let ans = [];
    let maxi = Number.MIN_VALUE;
    let n = arr.length;

    for (let i = n-1; i >= 0; i--){
        if (arr[i] > maxi){
            ans.push(arr[i])
        }
        maxi = Math.max(maxi,arr[i]);
    }
    ans.sort();
    return ans;
}

console.log(leadersArrayOptimal(arr));


