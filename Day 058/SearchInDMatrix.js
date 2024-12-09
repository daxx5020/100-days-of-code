// Search in 2D mattrix

let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]

let target = 5

/* 
    BruteForce Solution
*/

const searchMatrixBruteForce = function (matrix, target){
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
    Optimal Solution
*/


const searchMatrixOptimal = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let row = 0;
    let col = m - 1;

    while (row < n && col >= 0){
        if (matrix[row][col] === target){
            return true;
        }
        else if(matrix[row][col] < target){
            row++;
        }
        else{
            col--;
        }
    }
    return false;
}

console.log(searchMatrixOptimal(matrix, target));