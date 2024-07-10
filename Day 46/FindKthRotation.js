// Find kth rotation


let arr = [5, 1, 2, 3, 4];

/*
    Better Solution
*/


const findKRotationBetter = function (arr){
    let n = arr.length; // Size of array.
    let ans = Infinity, index = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] < ans) {
            ans = arr[i];
            index = i;
        }
    }
    return index;
}

console.log(findKRotationBetter(arr));


/*
    Optimal Solution
*/

const findKRotationOptimal = function (arr){
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let ans = Infinity;
    let index = -1;

    while(low <= high){
        let mid = Math.floor((high + low) / 2);

        // If one half is already sorted then
        if (arr[low] <= arr[high]){
            if (arr[low] < ans){
                index = low;
                ans = arr[low];
            }
            break;
        }
        
        if (arr[low] <= arr[mid]){
            if (arr[low] < ans){
                index = low;
                ans = arr[low];
            }
            low = mid+1;
        }
        else{
            if (arr[mid] < ans){
                index = mid;
                ans = arr[mid];
            }
            high = mid-1;
        }
    }
    return index;
}

console.log(findKRotationOptimal(arr));