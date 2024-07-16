// Minimum number of days to make m Bouquets

let bloomDay = [7,7,7,7,12,7,7]
let m = 2
let k = 3

/*
    Optimal Solution
*/

const possible = function (bloomDay,mid,m,k) {
    let count = 0;
    let noofb = 0;

    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= mid){
            count++;
        }
        else{
            noofb += Math.floor(count / k);
            count = 0; 
        }
    }
    noofb += Math.floor(count / k);
    return noofb >= m;
}

const minDays = function (bloomDay,m,k){
    let val = m * k;
    if (val > bloomDay.length) return -1;
    
    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);
    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        if (possible(bloomDay,mid,m,k)){
            high = mid -1;
        }
        else{
            low = mid +1;
        }
    }
    return low;

}

console.log(minDays(bloomDay,m,k));