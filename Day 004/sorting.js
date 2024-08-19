//selection sort

/*

    How selection sort works?

    Step 1: Find smallest number in the entire array and swap it with first element.

    Step 2: Repeat the process.

*/

// sorting by selection sort

let arr = [13,46,24,52,20,9];

const selectionSort = function(arr){
    let n = arr.length; 
    for(let i = 0; i <n-2;i++){
        let min = i;
        for(let j = i; j <= n-1; j++){
            if(arr[j] < arr[min] ){
                min = j;
            }
            let temp = arr[min];
            arr[min] = arr[i]
            arr[i] = temp;
        }
    }

    return arr;
}

console.log(selectionSort(arr));




//bubble sort

/*
    Step 1: Compare nearby two number and swap them if they not in the right order. AFter processing this you realize this the big nunber is placed at the last.
    
    Step 2: Repeat the process until all numbers are sorted.
*/


let arr1 = [13,46,24,52,20,9];

const bubbleSort = function (arr){
    let n = arr.length;
    for (let i = n-1; i>=0; i-- ){
        let didswap = 0;
        for (let j = 0; j <= i; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                didswap = 1;
            }
        }
        if (didswap == 0){
            break;
        }
    }
    return arr;
}


console.log(bubbleSort(arr1));


//Insertion Sort

/*
    Step 1: Compare the numbers and get smallest number and shift smallest number to the left.

    Step 2: Repeat the process.
    
*/

arr3 = [6,5,4,3,2,1]

const InsertionSort = function(arr){
    let n = arr.length
    for(let i=0; i<= n-1; i++){
        let j = i;
        while(j>0 && arr[j-1] > arr[j]){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}

console.log(InsertionSort(arr3));