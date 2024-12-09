// Insertion sort

let arr = [6,5,4,3,2,1]

const insertionSort = function (arr){
    for (let i = 0; i <= arr.length  - 1; i++) {
        let j = i;
        while(j > 0 && arr[j-1] > arr[j]){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            j--;
        }

    }
    return arr;
}

console.log(insertionSort(arr))