function coinCombination(total: number): number {
  // Available coin types in pence
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];

  // Create array to store number of ways to make each amount
  // dp[i] represents the number of ways to make amount i
  const dp = new Array(total + 1).fill(0);

  // Base case: there's only one way to make 0 (which is using no coins)
  dp[0] = 1;

  // For each coin type
  for (const coin of coins) {
    // Update all amounts that can be made with this coin
    for (let amount = coin; amount <= total; amount++) {
      dp[amount] += dp[amount - coin]; // This adds the number of ways we can do the remainder of the amount
    }
  }

  return dp[total];
}

// Test cases
console.log(coinCombination(200)); // Should output: 73682

// Note : the for loop does the following after dp[0] is set to 1, it will loop through every number
// between 1 (which is the smallest coin type we can use) until we reach the last type, for each 
// type we'll loop between (type and the number entered by user(amount)), the whole idea is 
// to calculate intermediate ways to create a specific number, ex: 5 can consist of 2 + 3 + 1,
// the array here already have all the ways to make 2, 3 and 1, we just add all those
