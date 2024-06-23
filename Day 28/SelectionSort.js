// Selection sort


let arr = [5,7,3,12,1,23,5,4];

const selectionSort = function (arr){
    for (let i = 0; i < arr.length-1; i++){
        let mini = i;
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[mini] ){
                mini = j
            }
        }
        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


console.log(selectionSort(arr));
