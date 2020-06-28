'use strict';

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = (tickets) => {
  
};

const testRunner = (tests, func) => {
  const name = func.name;
  for (let [input, expected] of tests) {
    const result = func(input);
    console.log({
      name,
      input,
      result,
      expected,
      pass: result === expected,
    });
  }
}

const test = () => {
  const tests = [
    [
      [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]],
      ["JFK", "MUC", "LHR", "SFO", "SJC"],
    ],
    [
      [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]],
      ["JFK","ATL","JFK","SFO","ATL","SFO"],
    ],
  ];

  testRunner(tests, findItinerary);
}

export default test();
