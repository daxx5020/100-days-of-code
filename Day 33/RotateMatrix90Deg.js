// Rotate the matrix by 90 Deg.

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];


// *** Bruteforce Solution ***

const rotateMatrixBruteForce = function (matrix) {
    let n = matrix.length;
    let ans = Array.from({ length: n }, () => Array(n).fill(null));

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++) {
            ans[j][matrix.length - 1 - i] = matrix[i][j];
        }
    }
    return ans;
}

console.log(rotateMatrixBruteForce(matrix));



// *** Optimal Solution ***


const rotateMatrixOptimal = function (matrix){
    let n = matrix.length;

    for (let i = 0; i < n-1; i++){
        for (let j = i+1; j < n; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++){
        matrix[i].reverse();
    }

    return matrix;
}

console.log(rotateMatrixOptimal(matrix));