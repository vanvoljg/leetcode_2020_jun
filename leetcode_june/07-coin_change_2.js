/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {};

const count = function (coins, coinIdx, amount) {
  if (amount == 0) return 1;
  if (amount < 0) return 0;
  if (coinIdx <= 0 && amount > 0) return 0;
  return (
    count(coins, coinIdx - 1, amount) +
    count(coins, coinIdx, amount - coins[coinIdx - 1])
  );
};

/*
 * 500
 * [3,5,7,8,9,10,11]
 */

const run = function () {
  const amount = 500;
  const coins = [3, 5, 7, 8, 9, 10, 11];
  const start = Date.now();
  const number = count(coins, coins.length, amount);
  const duration = Date.now() - start;
  console.log({ number, duration });
};

run();
