// coin change

const minCoins = function(coins,V,M){
    const dp = Array(V + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= V; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }

    return dp[V] === Infinity ? -1 : dp[V];
}
