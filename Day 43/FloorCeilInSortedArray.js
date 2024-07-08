// Floor / Ceil in sorted array

let n = 6;
let arr = [3, 4, 4, 7, 8, 10];
let x= 5;

const findFloor = function(arr, n , x){
    let low = 0;
    let high = n-1;
    let ans = -1;

    while (low <= high){
        mid = Math.floor((high + low)/2);
        if (arr[mid] <= x){
            ans = arr[mid];
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return ans;
}

const findCeil = function(arr, n , x){
    let low = 0;
    let high = n-1;
    let ans = -1;

    while (low <= high){
        mid = Math.floor((high + low)/2);
        if (arr[mid] >= x){
            ans = arr[mid];
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return ans;
}

const getFloorAndCeil = function(arr,n,x){
    let f = findFloor(arr,n,x);
    let c = findCeil(arr,n,x);
    return [f,c];
}

console.log(getFloorAndCeil(arr,n,x));
