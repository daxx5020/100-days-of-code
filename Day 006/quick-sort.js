//Quick-sort

/*
    Step 1 : Choose a pivot.

    Step 2: Place it in a correct place.

    Step 3: Sort left side of the pivot and right side of the pivot with same direction.
*/


let arr = [1,8,21,9,85,542,8,984,465,4,55,45];

const partition = function(arr, low, high){
    let pivot = arr[low];
    let i = low;
    let j = high;

    while(i < j ){
        while(arr[i] <= pivot && i <= high - 1 ){
            i++;
        }

        while(arr[j] > pivot && j >= low + 1 ){
            j--;
        }

        if (i<j){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}


const qs = function (arr, low, high){
    if (low < high){
        let pIndex = partition(arr, low, high);
        qs(arr,low,pIndex-1);
        qs(arr,pIndex+1,high);
    }
}


const QuickSort = function (arr){
    qs(arr,0, arr.length-1)
    return arr;
}


console.log(QuickSort(arr))