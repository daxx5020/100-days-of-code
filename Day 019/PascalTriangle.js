// Pascal Triangle


const generateRow = function (row){
    ans = 1;
    ansRow = [];
    ansRow.push(1);
    for (let col = 1; col < row; col++){
        ans = ans * (row-col);
        ans = ans / (col);
        ansRow.push(ans);
    }
    return ansRow;
}


const pascalTriangle = function (N){
    let ans = [];
    for (let i = 0; i <= N; i++){
        ans.push(generateRow(i));
    }

    return ans;
}

console.log(pascalTriangle(5));