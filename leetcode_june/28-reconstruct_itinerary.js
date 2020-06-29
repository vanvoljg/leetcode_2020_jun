'use strict';

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = (tickets) => {
  let route = [];
  let adjList = new Map();
  for (let [from, to] of tickets) {
    adjList.has(from) || adjList.set(from, []);
    let temp = adjList.get(from);
    temp.push(to);
    adjList.set(from, temp);
  }
  for (let [from, toArr] of adjList) {
    adjList.set(from, revSortStrings(toArr));
  }
  dfs(adjList, 'JFK', route);
  return route.reverse();
};

const dfs = (adjList, dest, route) => {
  while (adjList.has(dest)) {
    let toList = adjList.get(dest);
    let next = toList.pop();
    if (toList.length === 0) {
      adjList.delete(dest);
    } else {
      adjList.set(dest, toList);
    }
    dfs(adjList, next, route);
  }
  route.push(dest);
};

const revSortStrings = (array) => array.sort((a, b) => (a < b ? 1 : -1));

const testRunner = (tests, func) => {
  const name = func.name;
  for (let [input, expected] of tests) {
    const result = func(input);
    console.log({
      name,
      input,
      result,
      expected,
      pass: arrtest(result, expected),
    });
  }
};

const arrtest = (result, expected) => {
  for (let i = 0; i < expected.length; i++) {
    if (result[i] !== expected[i]) return false;
  }
  return true;
};

const test = () => {
  const tests = [
    [
      [
        ['MUC', 'LHR'],
        ['JFK', 'MUC'],
        ['SFO', 'SJC'],
        ['LHR', 'SFO'],
      ],
      ['JFK', 'MUC', 'LHR', 'SFO', 'SJC'],
    ],
    [
      [
        ['JFK', 'SFO'],
        ['JFK', 'ATL'],
        ['SFO', 'ATL'],
        ['ATL', 'JFK'],
        ['ATL', 'SFO'],
      ],
      ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'],
    ],
    [
      [
        ['JFK', 'KUL'],
        ['JFK', 'NRT'],
        ['NRT', 'JFK'],
      ],
      ['JFK', 'NRT', 'JFK', 'KUL'],
    ],
    [
      [
        ['EZE', 'TIA'],
        ['EZE', 'HBA'],
        ['AXA', 'TIA'],
        ['JFK', 'AXA'],
        ['ANU', 'JFK'],
        ['ADL', 'ANU'],
        ['TIA', 'AUA'],
        ['ANU', 'AUA'],
        ['ADL', 'EZE'],
        ['ADL', 'EZE'],
        ['EZE', 'ADL'],
        ['AXA', 'EZE'],
        ['AUA', 'AXA'],
        ['JFK', 'AXA'],
        ['AXA', 'AUA'],
        ['AUA', 'ADL'],
        ['ANU', 'EZE'],
        ['TIA', 'ADL'],
        ['EZE', 'ANU'],
        ['AUA', 'ANU'],
      ],
      [
        'JFK',
        'AXA',
        'AUA',
        'ADL',
        'ANU',
        'AUA',
        'ANU',
        'EZE',
        'ADL',
        'EZE',
        'ANU',
        'JFK',
        'AXA',
        'EZE',
        'TIA',
        'AUA',
        'AXA',
        'TIA',
        'ADL',
        'EZE',
        'HBA',
      ],
    ],
  ];

  testRunner(tests, findItinerary);
};

export default test();
