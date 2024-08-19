// Find peak elements


let mat = [[10,50,40,30,20],[1,500,2,3,4]];

const findMaxIndex = function(mat,n,m,mid){
    let maxValue = -1;
    let index = -1;
    for (let i = 0; i < n; i++){
        if (mat[i][mid] > maxValue){
        maxValue = mat[i][mid];
        index = i;
        }
    }
    return index;
}

const findPeakElement = function(mat){
    let n = mat.length;
    let m = mat[0].length;
    let low = 0;
    let high = m - 1;
    
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        let maxRowIndex = findMaxIndex(mat,n,m,mid);
        let left = mid - 1 >= 0 ? mat[maxRowIndex][mid - 1] : -1;
        let right = mid + 1 < m ? mat[maxRowIndex][mid + 1] : -1;
        if (mat[maxRowIndex][mid] > left && mat[maxRowIndex][mid] > right){
            return [maxRowIndex, mid]
        }
        else if(mat[maxRowIndex][mid] < left){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return [-1, -1];
}

console.log(findPeakElement(mat));