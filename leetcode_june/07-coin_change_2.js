/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {};

/* Naive solution, slow, takes like...forever...
const count = function (coins, coinIdx, amount) {
  if (amount == 0) return 1;
  if (amount < 0) return 0;
  if (coinIdx <= 0 && amount > 0) return 0;
  return (
    count(coins, coinIdx - 1, amount) +
    count(coins, coinIdx, amount - coins[coinIdx - 1])
  );
};
*/

/* The following dynamic solution based on code from
 * https://www.geeksforgeeks.org/coin-change-dp-7/
 */
const count = function (amount, coins, numCoins) {
  // if (amount === 0) return 0; // amount 0 cannot ever be made with any number of coins
  // The edge case with amount 0 and coins [] irritates me. 
  let solutions = new Array(amount + 1);

  solutions = solutions.fill(0);

  solutions[0] = 1; // special case which is used as the base for the first coin

  for (let i = 0; i < numCoins; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      solutions[j] += solutions[j - coins[i]];
    }
  }

  return solutions[amount];
};

/*
 * 500
 * [3,5,7,8,9,10,11]
 */

const run = function () {
  const amount = 500;
  const coins = [3,5,7,8,9,10,11];
  const start = Date.now();
  const number = count(amount, coins, coins.length);
  const duration = Date.now() - start;
  console.log({ number, duration });
};

run();
