// Median in a row wise matrix

let R = 3
let C = 3
let matrix = [[1, 3, 5], 
     [2, 6, 9], 
     [3, 6, 9]]


/*
    Brute Force Solution
*/


const medianBruteForce = function (matrix, R, C) {
    let ls = [];
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            ls.push(matrix[i][j])
        }
    }

    ls.sort((a, b) => a - b)

    return ls[Math.floor((m * n) / 2)];
}

console.log(medianBruteForce(matrix,R,C));


/*
    Optimal Solution
*/

const upperBound = function (arr, x, n) {
    let low = 0;
    let high = n - 1;
    let ans = n;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > x) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

const countSmallEqual = function (matrix, n, m, x) {
    let cnt = 0;
    for (let i = 0; i < n; i++) { // Iterate over rows
        cnt += upperBound(matrix[i], x, m);
    }
    return cnt;
}

const medianOptimal = function (matrix, R, C) {
    let low = Number.MAX_VALUE;
    let high = Number.MIN_VALUE;
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) { // Iterate over rows
        low = Math.min(low, matrix[i][0]);
        high = Math.max(high, matrix[i][m - 1]);
    }

    let req = Math.floor((n * m) / 2);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let smallEqual = countSmallEqual(matrix, n, m, mid);
        if (smallEqual <= req) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}


console.log(medianOptimal(matrix, R, C))