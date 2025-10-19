function maximumProfit(array) {
  // Edge case: empty or single element array
  if (!array || array.length < 2) {
    return 0;
  }

  let minPrice = array[0]; // Track the minimum price seen so far
  let maxProfit = 0; // Track the maximum profit

  // starting the loop from the second element
  for (let i = 1; i < array.length; i++) {
    // Calculate profit if we sell at current price
    let currentProfit = array[i] - minPrice;

    // Update the maximum profit if the current profit is higher
    maxProfit = Math.max(maxProfit, currentProfit);

    // Update the minimum price if the current price is lower
    minPrice = Math.min(minPrice, array[i]);
  }

  return maxProfit;
}
