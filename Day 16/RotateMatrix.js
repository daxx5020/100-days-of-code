// Rotate the matrix 

let matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]

const rotateMatrix = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n-1; i++){
        for (let j = i+1; j <n; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < n; i++){
        matrix[i].reverse();
    }

    return matrix;
}


console.log(rotateMatrix(matrix))