//Hashing

// find a number that how many times appears in the array

// let arr = [1,2,1,5,1,2,3,3]
// let number = 2;

// const findNumber = function(number,arr){
//     let count = 0;

//     for(i=0;i<arr.length;i++){
//         if (arr[i]==number){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(findNumber(number,arr))



/*
    What is hashing?
    hashing means pre storing and fetching

    same functin of above we are writing as the concept of hashing because of that we can finc multiple numbers which appeares in the array with this.

    in hash we will get all count of that number appeares in the array.


    LIMIT LENGTH OF THE ARRAY IN JAVASCRIPT IS 2 TO THE POWE 32 - 1 OR 4,294,967,295 ELEMENTS.
*/


let arr = [1,2,1,5,1,2,3,3]
let number = 2;

const findNumber = function(number,arr){
    let hash = Array(14).fill(0);

    for(i=0;i<arr.length;i++){
        if (arr[i]==number){
            hash[arr[i]] +=1
        }
    }
    return hash[number];
}

console.log(findNumber(number,arr))