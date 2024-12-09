// Set Matrix Zeroes

// *** Better Solution ***

let matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
];

const setZeroes = function (matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    let row = new Array(n).fill(false);
    let col = new Array(m).fill(false);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                col[j] = true;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};

console.log(setZeroes(matrix));


// Set Matrix Zeroes

// *** Optimal Solution ***


const setZeroesOptimal = function (matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let col0 = 1;

    for (let i = 0; i < n; i++) {
        if (matrix[i][0] == 0) col0 = 0;
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0; 
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[0][j] == 0 || matrix[i][0] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (matrix[0][0] == 0) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }

    if (col0 == 0) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
};


console.log(setZeroesOptimal(matrix));

