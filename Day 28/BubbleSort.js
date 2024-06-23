// Bubble sort


let arr = [5,7,3,12,1,23,5,4];

const bubbleSort = function (arr){
    let n = arr.length;
    for (let i = n-1; i >=0; i--){
        let didSwap = 0;
        for (let j = 0; j <= i-1; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                didSwap = 1;
            }
            if (didSwap == 0){
                break;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr))