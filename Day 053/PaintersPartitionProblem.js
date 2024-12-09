// Painter partition problem

let boards = [7,2,5,10,8]
let k = 2

const count = function(boards, pages){
    let students = 1;
    pagesStudent = 0;
    for (let i = 0; i < boards.length; i++){
        if (pagesStudent + boards[i] <= pages){
            pagesStudent += boards[i];
        }
        else{
            students += 1;
            pagesStudent = boards[i];
        }
    }
    return students;
}


const splitArray = function (boards, k){
    let n = boards.length;
    if (k > n) return -1;
    let low = Math.max(...boards);
    let high = boards.reduce((sum, current) => sum + current, 0);
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        let students = count(boards, mid);
        if (students > k){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return low;
}

console.log(splitArray(boards,k));