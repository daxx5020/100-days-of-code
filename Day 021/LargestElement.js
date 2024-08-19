// Find larget number in the array


let arr = [0,0];



const largestElementBruteforce = function (arr){
    arr.sort((a,b) => a-b);
    return arr[arr.length - 1];
}

console.log(largestElementBruteforce(arr))







const largestElementSecondRecursive = function (arr){
    let max = arr[0];

    for (let i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}


console.log(largestElementSecondRecursive(arr));