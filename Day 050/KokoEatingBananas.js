// Koko eating bananas

let piles = [30,11,23,4,20];
let h = 5;

/*
    Bruteforce Solution
*/

const calculateTotalHours = function (piles,h){
    let totalHour = 0;
    let n = piles.length;

    for (let i = 0; i < n; i++){
        totalHour += Math.ceil(piles[i]/h);
    }
    return totalHour;
}

const cocoEatingBananas = function (piles, h){
    let maxi = Math.max(...piles);
    for (let i = 0; i <= maxi; i++){
        let reqTime = calculateTotalHours(piles,i);
        if (reqTime <= h){
            return i;
        }
    }
    return maxi;
}

console.log(cocoEatingBananas(piles, h));


/*
    Optimal Solution
*/


const cocoEatingBananasOptimal = function (piles, h){
    let low = 1;
    let high = Math.max(...piles);

    while (low <= high){
        let mid = Math.floor((high + low)/2);
        let totalHours = calculateTotalHours(piles, mid);
        if (totalHours <= h){
            high = mid - 1;
        }
        else{
            low = mid +1;
        }
    }
    return low;
}

console.log(cocoEatingBananasOptimal(piles, h));