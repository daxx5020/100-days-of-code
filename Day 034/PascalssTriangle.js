// Pascals triangle

// nCr = n! / r!*(n-r)! Main formula for pascal triangle



// This function for giving the value from the columns and row.

let r = 5;
let c = 3;


// Formula in code for NCR

const ncr = function (n, r){
    let res = 1;
    for (let i = 0; i < r; i++){
        res = res * (n-i);
        res = res / (i+1);
    }
    return res;
}

// Print the value from the row and column

const pascalTriangleFindValue = function (r,c){
    let element = ncr(r-1,c-1);
    return element;
}

console.log(pascalTriangleFindValue(r,c));





// Print the pascal triangle

// *** Better Solution *** With NCR

let numRows = 5;

const pasclaTriangleBetter = function (numRows){
    let ans = [];

    for (let row = 1; row <= numRows; row++) {
        let tempArr = [];
        for (let col=1; col <= row; col++){
            tempArr.push(ncr(row-1,col-1))
        }
        ans.push(tempArr);
    }
    return ans;
}


console.log(pasclaTriangleBetter(numRows));



// *** Optimal Solution *** With By generate row


// Function for generate row;

const generateRow = function (row){
    let ans = 1;
    let ansRow = [];
    ansRow.push(1);

    for (let col = 1; col < row;col++){
        ans = ans * (row-col);
        ans = ans / (col);
        ansRow.push(ans);
    }
    return ansRow;

}


const pasclaTriangleOptimal = function (numRows){
    let ans = [];
    for (let i = 1; i<=numRows; i++){
        ans.push(generateRow(i));
    }
    return ans;
}

console.log(pasclaTriangleOptimal(numRows))