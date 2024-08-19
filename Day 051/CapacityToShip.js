// Capacity to ship packages within D days

let weights = [1,2,3,4,5,6,7,8,9,10]
let days = 5

/*
    Ooptimal Solurion
*/  

const findDays = function(weights, cap){
    let days = 1;
    let load = 0;
    for (let i = 0; i < weights.length; i++){
        if (weights[i] + load > cap){
            days += 1;
            load = weights[i];
        }
        else{
            load += weights[i];
        }
    }
    return days;
}


const shopWithinDaysOptimal = function(weights,days){
    let low = Math.max(...weights);
    let high = weights.reduce((partialSum, a) => partialSum + a, 0);
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        noofdays = findDays(weights, mid);
        if (noofdays <= days){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return low;
}

console.log(shopWithinDaysOptimal(weights, days));