const maxProfit = function (prices) {
    let min = prices[0];
    let profit = 0;

    for(let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit = Math.max(profit, prices[i] - min);
        } else {
            min = Math.min(min, prices[i]);
        }
    }
    return profit;
}

var profit = [7, 1, 5, 3, 6, 2];

console.log(maxProfit(profit));