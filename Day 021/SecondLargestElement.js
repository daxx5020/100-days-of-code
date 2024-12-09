// Second largest element


arr = [12, 35, 1, 10, 34, 1];

const secondLargestElementBruteforce = function (arr){
    if (arr.length === 0 || arr.length === 1) {
        console.log(-1 + " " + -1);
        return;
    }

    arr.sort((a,b) => a-b)
    let small = arr[1];
    let large = arr[arr.length-2];
    console.log(small);
    console.log(large);
}


console.log(secondLargestElementBruteforce(arr));



const secondLargestElementBetter = function (arr){
    if (arr.length === 0 || arr.length === 1) {
        console.log(-1 + " " + -1);
        return;
    }

    let small = Infinity;
    let secondsmall = Infinity;
    let large = -Infinity;
    let secondlarge = -Infinity;

    for (let i = 0; i < arr.length; i++){
        small = Math.min(small, arr[i]);
        large = Math.max(large, arr[i]);
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < secondsmall && arr[i] !== small){
            secondsmall = arr[i];
        }
        if (arr[i] > secondlarge && arr[i] !== large){
            secondlarge = arr[i];
        }
    }
    console.log(secondsmall)
    console.log(secondlarge)

}


secondLargestElementBetter(arr)