// Fractional Knapsack


const fractionalKnapsack = function(w,arr,n){
    arr.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalVal = 0;
    for (let i = 0; i < n; i++){
        if (w >= arr[i].weight){
            totalVal += arr[i].value;
            w -= arr[i].weight;
        } else {
            totalVal += (w / arr[i].weight) * arr[i].value;
            break;
        }
    }
    return totalVal;
} 