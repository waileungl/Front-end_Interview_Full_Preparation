var maxProfit = function (prices) {
    let min1 = prices[0];
    let profit1 = 0;
    let min2 = Infinity;
    let profit2 = 0;

    for (let i = 1; i < prices.length; i++) {
        min1 = Math.min(prices[i], min1)
        profit1 = Math.max(profit1, prices[i] - min1)
        min2 = Math.min(prices[i]+profit1, min2)
        profit2 = Math.max(prices[i] - min2, profit2)
    }
    return profit1 + profit2
};

console.log(
    maxProfit([1, 2, 3, 4, 5])
)