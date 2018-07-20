var maxProfit = (prices) => {
  let dayBought = 0;
  let profit = 0;

  for(var i = 0; i < prices.length; i++) {
    fi(prices[i] > prices[i-1]) {
      profit = prices[i] - prices[i - 1];
    }

  }

  return profit;
};