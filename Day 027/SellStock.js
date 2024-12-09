// Best time to sell stock

let prices = [7,1,5,3,6,4]


const sellStock = function (prices){
    let maxProfit = 0;

    for (let i = 0; i < prices.length-1; i++) {
        for (let j = i+1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
}


console.log(sellStock(prices));


const sellStockOptimal = function (prices){
    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;

    for (let i = 0; i < prices.length; i++){
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}


console.log(sellStockOptimal(prices));