// Find square root of number

let x = 6;

/*
    Bruteforce Solution
*/

const findSquareRootBruteForce = function (x){
    let ans = 0;
    for (let i = 1; i < x; i++){
        if (i * i <= x){
            ans = i;
        }
        else{
            break
        }
    }
    return ans;
}

console.log(findSquareRootBruteForce(x));


/*
    Optimal Solution
*/


const findSquareRootOptimal = function (x) {
    let low = 1;
    let high = x;
    let ans = 0;

    while (low <= high){
        let mid = Math.floor((low + high)/2);
        if (x === 1) return 1;
        if ((mid * mid) <= x){
            ans = mid;
            low = mid + 1;
        }
        else{
            high = mid -1;
        }
    }
    return ans;
}

console.log(findSquareRootOptimal(x));

