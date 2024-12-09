//Merge Sort

/*
    Hypothetiaclly break the array in 2 parts while it have only one length element in the array and then merge the aray with the new sorted order.
*/



let arr = [1, 4, 5, 8, 7, 32, 4, 3, 13, 49, 6, 124];
let n = arr.length;

const merge = function(arr,low,mid,high){
    let temp = [];
    let left = low;
    let right = mid+1;

    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            temp.push(arr[left]);
            left++;
        }
        else{
            temp.push(arr[right]);
            right++;
        }
    }

    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }

    while(right <= high){
        temp.push(arr[right]);
        right++;
    }

    for (let i=low; i <= high; i++){
        arr[i] = temp [i-low];
    }
}


const ms = function(arr,low,high){
    if(low == high) return;

    let mid = Math.floor((low + high)/2);
    ms(arr,low,mid);
    ms(arr,mid+1,high);
    merge(arr,low,mid,high);

}


const mergeSort = function(arr,n){
    ms(arr, 0, n-1);
    return arr;
}

console.log(mergeSort(arr,n));