//Character hashing

/*
    How can we use hashing in characters?

    So for that we have to thing called ASCII characters which are represented by a single byte (8 bits).

    Example:-

    lowercase a = 97;
    lowercase z = 122;

    Now how can we find any character from this ASCII?

    if we represent f(102)

    ASCII(f) - ASCII(a) = 102 - 91 = 5
    Now what is 5 here.

    a = 0;
    b = 1;
    c = 2;
    d = 3;
    e = 4;
    f = 5;

    so from this formula we faound num 5 and that represents f.

    final formula = char - a

*/


//find count of the alphabete from string

/*

We can get ASCII with string.charCodeAt(index); in javascript

*/

let str = "abcdabehf";
let str2 = "c";
const characterHashing = function(str,str2){
    let hash = Array(26).fill(0);

    for (let i = 0; i < str.length; i++){
        hash[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    return hash[str2.charCodeAt(0) - 'a'.charCodeAt(0)];
}

console.log(characterHashing(str,str2))


//what if we do not assign complete 26 characters of array and assign more than that and changes in code that do not substract that also runs perfectly


let str3 = "abcdabehf";
let str4 = "c";
const characterHashingWithoutSubstact = function(str3,str4){
    let hash = Array(256).fill(0);

    for (let i = 0; i < str3.length; i++){
        hash[str3.charCodeAt(i)]++;
    }

    return hash[str4.charCodeAt(0)];
}

console.log(characterHashingWithoutSubstact(str3,str4))




//let find number count from array with map....becasue of map we do not have to declare long arrays we will insert count of that num which is in the array.

let arr = [1,2,3,1,3,2,12,1];
let num = 10;
const findByMap = function(arr,num){
    let map = new Map();
    let n = arr.length;

    for (let i = 0; i < n; i++){
        map.set(arr[i],(map.get(arr[i]) || 0) + 1)
    }

    return map.get(num) || 0;
}

console.log(findByMap(arr,num))



//map with character hashing

let str5 = "abcdabehfa";
let str6 = "a";
const findByMapInCharacters = function(str5,str6){
    let map = new Map();
    let n = str5.length;

    for (let i = 0; i < n; i++){
        map.set(str5[i],(map.get(str5[i]) || 0) + 1)
    }

    return map.get(str6) || 0;
}

console.log(findByMapInCharacters(str5,str6))


/*

    Hashing:-
    
    1. Division Method
    2. Folding Method
    3. Mis Sequence Method

*/