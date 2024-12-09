//Searching an element in a sorted array

let arr = [1,2,3,4,6]
let K = 6;

const linearSearch = function(arr,K){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === K ){
            return 1;
        }
    }
    return -1;
}


console.log(linearSearch(arr,K))