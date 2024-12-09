// Search in 2D matrix


let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target  = 4;

/*
    Bruteforce Solution
*/

const searchMatrixBruteForce = function (matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(searchMatrixBruteForce(matrix, target));


/*
    Bruteforce Solution
*/


const searchMatrixoptimal = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let low = 0, high = n * m - 1;
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        let row =  Math.floor(mid / m);
        let col = mid % m;
        if (matrix[row][col] === target){
            return true;
        }
        else if(matrix[row][col] < target){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return false;
}

console.log(searchMatrixoptimal(matrix, target));