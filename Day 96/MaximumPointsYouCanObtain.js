// Maximum points you can obtain from cards

const maxScore = function(cardPoints,k){
    let lsum = 0;
    let rsum = 0;
    let maxScore = 0;
    let n = cardPoints.length;

    for (let i = 0; i < k; i++){
        lsum = lsum + cardPoints[i];
    }

    maxScore = lsum;
    
    for (let i = 0; i < k; i++) {
        lsum -= cardPoints[k - 1 - i];
        rsum += cardPoints[n - 1 - i];

        maxScore = Math.max(maxScore, lsum + rsum);
    }
    return maxScore;
}

let cardPoints = [1,2,3,4,5,6,1] 
let k = 3

console.log(maxScore(cardPoints, k));