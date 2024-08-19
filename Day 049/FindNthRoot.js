// Find nth root of m

let n = 2;
let m = 9;

/* 
    return 1 if == m
    return 0 if < m
    return 2 if > m
*/

let multiplier = function(mid,n,m){
    let ans = 1;
    for (let i = 1; i <= n; i++){
        ans = ans * mid;
        if (ans > m) return 2;
    }
    if (ans === m) return 1;
    return 0;
}


/*
    Bruteforce Solution
*/

const findNthRootBruteForce = function (n,m){
    for(let i = 0; i < n; i++){
        let midN = multiplier(i, n, m);
        if (midN == 1){
            return i;
        }
        else if(midN > m){
            break;
        }
    }
    return -1;
}

console.log(findNthRootBruteForce(n,m));


/*
    Optimal Solution
*/

const findSquareRootOptimal = function (n,m){
    let low = 1;
    let high = m;

    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        let midN = multiplier(mid, n, m);
        if (midN === 1) return mid;
        else if(midN === 0) low = mid+1;
        else high = mid -1;
    }
    return -1;
}

console.log(findSquareRootOptimal(n,m));