class Solution{
    print2largest(arr,n){
    let maxNumber = -Infinity;
    let secondMaxNumber = -Infinity;
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }
    for(let i =0; i<n; i++){
        if(arr[i] > maxNumber ){
            secondMaxNumber = maxNumber;        
            maxNumber = arr[i];
        }
        else if(arr[i] > secondMaxNumber && arr[i] != maxNumber ){
            secondMaxNumber = arr[i];
        }
    }
     if (secondMaxNumber === -Infinity) {
        return -1;
    }
    return secondMaxNumber;;
    }
}