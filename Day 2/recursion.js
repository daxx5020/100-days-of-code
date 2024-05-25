// print the array reverse order with recursion

//solution with two pointers left and right and if they cross return it and give the solution.a

let arr = [1,2,3,4,5]
const reverseArray = function(arr,l,r){
    if(l>=r) return;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    reverseArray(arr,l+1,r-1);
    return arr;
}

console.log(reverseArray(arr,0,arr.length - 1));



//give this same solutin with only one pointers

/*
    because supposse for this array [1,2,3,4]
    if i = 0 then n-i-1 = 3 so it will works as last index.
    so by that we can swap the numbers.

    and if i >= arr.length/2 then stop no need to swap.
*/

let arr1 = [1,2,3,4]
const reverseArray1 = function(arr,i){
    let n = arr.length;
    if(i>=n/2) return;
    [arr[i], arr[n-i-1]] = [arr[n-i-1], arr[i]];
    reverseArray1(arr, i+1);
    return arr;
}

console.log(reverseArray1(arr,0));




//find palindrome with recursion


let str = "madam";

const findPalindrome = function(i, str){
    let n = str.length;
    if (i>=n/2) return;

    if(str[i] !== str[n-i-1]){
        return false;
    }

    findPalindrome(i+1, str);
    return true;
}

console.log(findPalindrome(0,str))




//multiple recursion calls

// fibonacci number

let n = 4;

const fibonacciNumber = function (n){
    if (n<=1) return n;

    let last = fibonacciNumber(n-1)
    let slast = fibonacciNumber(n-2)
    return last + slast;
}

console.log(fibonacciNumber(n));


