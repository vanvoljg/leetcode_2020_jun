'use strict';
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
const findCheapestPrice = (n, flights, src, dst, k) => {
  if (src == dst) return 0;
  if (flights.length == 0) return -1;

  let dp = new Array(k+2); // k + 2 because ... it needs to be?
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n); // size n because ... yes?
    for (let j = 0; j < n; j++) {
      dp[i][j] = Number.MAX_SAFE_INTEGER;
    }
  };

  // dp[i][j] is the distance from src to j, following at most i edges
  for (let i = 0; i < dp.length; i++) {
    dp[i][src] = 0;
  }

  for (let i = 1; i < dp.length; i++) {
    for (const [from, to, cost] of flights) {
      if (dp[i-1][from] != Number.MAX_SAFE_INTEGER) {
        dp[i][to] = Math.min(dp[i][to], dp[i - 1][from] + cost);
      }
    }
  }

  if (dp[k+1][dst] == Number.MAX_SAFE_INTEGER) return -1;
  return dp[k+1][dst];
};

const run = () => {
  let ex1 = {
    n: 3,
    flights: [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    src: 0,
    dst: 2,
    k: 1,
  };
  let ex2 = {
    n: 3,
    flights: [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    src: 0,
    dst: 2,
    k: 0,
  };
  let ex3 = {
    n: 5,
    flights: [
      [0, 1, 100],
      [1, 2, 100],
      [2, 3, 200],
      [3, 4, 100],
      [0, 3, 200],
    ],
    src: 1,
    dst: 4,
    k: 0,
  };
  let ex4 = {
    n: 5,
    flights: [
      [0, 1, 100],
      [1, 2, 100],
      [2, 3, 200],
      [3, 4, 100],
      [1, 4, 500],
    ],
    src: 1,
    dst: 4,
    k: 2,
  };
  let ex5 = {
    n: 6,
    flights: [
      [0, 1, 100],
      [1, 2, 100],
      [2, 3, 200],
      [3, 4, 100],
      [1, 4, 500],
      [1, 3, 700],
    ],
    src: 1,
    dst: 4,
    k: 2,
  };
  let ex6 = {
    n: 5,
    flights: [
      [4, 1, 1],
      [1, 2, 3],
      [0, 3, 2],
      [0, 4, 10],
      [3, 1, 1],
      [1, 4, 3],
    ],
    src: 2,
    dst: 1,
    k: 1,
  };
  let ex7 = {
    n: 5,
    flights: [
      [1, 2, 10],
      [2, 0, 7],
      [1, 3, 8],
      [4, 0, 10],
      [3, 4, 2],
      [4, 2, 10],
      [0, 3, 3],
      [3, 1, 6],
      [2, 4, 5],
    ],
    src: 0,
    dst: 4,
    k: 1,
  };
  console.log({
    ex1: findCheapestPrice(ex1.n, ex1.flights, ex1.src, ex1.dst, ex1.k),
    ex2: findCheapestPrice(ex2.n, ex2.flights, ex2.src, ex2.dst, ex2.k),
    ex3: findCheapestPrice(ex3.n, ex3.flights, ex3.src, ex3.dst, ex3.k),
    ex4: findCheapestPrice(ex4.n, ex4.flights, ex4.src, ex4.dst, ex4.k),
    ex5: findCheapestPrice(ex5.n, ex5.flights, ex5.src, ex5.dst, ex5.k),
    ex6: findCheapestPrice(ex6.n, ex6.flights, ex6.src, ex6.dst, ex6.k),
    ex7: findCheapestPrice(ex7.n, ex7.flights, ex7.src, ex7.dst, ex7.k),
  });
};

run();
