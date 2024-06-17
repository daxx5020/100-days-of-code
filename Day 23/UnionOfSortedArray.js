// Find Union of Two Sorted Arrays


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 6, 7];

const findUnion = function(arr1, arr2){
    let set = new Set();
    for (let i = 0; i < arr1.length; i++){
        set.add(arr1[i]);
    }
    
    for (let i = 0; i < arr2.length; i++){
        set.add(arr2[i]);
    }
    
    let arr = Array.from(set);
    arr.sort((a,b) => a-b)
    return arr;
}


console.log(findUnion(arr1,arr2));



// *** Short method for js ***


const findUnionShort = function (arr1,arr2){
    let set = new Set([...arr1, ...arr2]);
    let arr = Array.from(set);
    arr.sort((a,b) => a-b)
    return arr;
}

console.log(findUnionShort(arr1,arr2));