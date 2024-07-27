// Book allocatio problem 

let n = 4;
let m = 2;
let arr = [12,34,67,90];

const countStudent = function(arr, pages){
    let students = 1;
    pagesStudent = 0;
    for (let i = 0; i < arr.length; i++){
        if (pagesStudent + arr[i] <= pages){
            pagesStudent += arr[i];
        }
        else{
            students += 1;
            pagesStudent = arr[i];
        }
    }
    return students;
}

const findPages = function (arr, n, m){
    if (m > n) return -1;
    let low = Math.max(...arr);
    let high = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    while (low <= high){
        let mid = Math.floor((high + low) / 2);
        let students = countStudent(arr,mid);
        if (students > m){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return low;
}
 
console.log(findPages(arr, n, m)); 