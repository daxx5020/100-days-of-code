// set Matrix to zeroes

// *** Bruteforce Solution ***

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];

const setMatrixZeroesBruteforce = function (matrix){
    let n = matrix.length;
    let m = matrix[0].length;

    let row = new Array(n).fill(false);
    let col = new Array(m).fill(false);

    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if (matrix[i][j] === 0) {
                row[i] = true;
                col[j] = true;
            }
        }
    }

    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if (row[i] || col[j]){
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

console.log(setMatrixZeroesBruteforce(matrix))
