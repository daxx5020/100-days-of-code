//Largest number in the array

let arr = [3,2,1,5,2];
max_value = Number.MIN_VALUE;

for(i=0; i<arr.length; i++){
    if (arr[i]>max_value){
        max_value = arr[i];
    }
}

console.log(max_value);


//second larget number in the array

let arr1 = [3,2,1,5,4];
let largest = arr1[0];
let second_largest = -1;

for(i=0; i<arr1.length; i++){
    if (arr1[i]>largest){
        second_largest = largest;
        largest = arr1[i];
    }

    else if(arr1[i] < largest && arr1[i] > second_largest ){
        second_largest = arr1[i];
    }
}

console.log(second_largest);


//check array is sorted or not

let arr3 = [1,2,3,4,5];

const isSorted = function(arr){
    for (let i=1; i<arr.length; i++){
        if (arr[i] >= arr[i-1] ){
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(isSorted(arr3));


//remove duplicates from the sorted array and then gives siize of the array

let arr4 = [1,1,2,2,2,3,3]

const removeDuplicates = function(arr){
    let i = 0;
    for(let j =1; j < arr.length; j++){
        if (arr[i] != arr[j] ){
            arr[i+1] = arr[j];
            i++;
        }  
    }
    return i+1;
}

console.log(removeDuplicates(arr4));
