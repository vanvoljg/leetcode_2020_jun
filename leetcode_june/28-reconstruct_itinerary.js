'use strict';

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = (tickets) => {
  let map = new Map();
  for (const [from, to] of tickets) {
    map.has(from) || map.set(from, []);
    let arr = map.get(from);
    arr.push(to);
    map.set(from, arr);
  }
  for (let [from, toArr] of map) {
    toArr.sort((a, b) => (a < b ? 1 : -1));
    map.set(from, toArr);
  }
  for (let [from, toArr] of map) {
    if (toArr.length > 1) {
      let tmp = [];
      for (let i = toArr.length - 1; i >= 0; i--) {
        if (!map.has(toArr[i])) {
          tmp.unshift(toArr.splice(i, 1)[0]);
        }
      }
      toArr = [...tmp, ...toArr];
      map.set(from, toArr);
    }
  }

  let ret = new Array();
  let cur = 'JFK';
  let toArr;
  let next;
  while (cur) {
    ret.push(cur);
    toArr = map.get(cur) || [];
    next = toArr.pop();
    map.set(cur, toArr);
    cur = next;
  }
  return ret;
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
      pass: arrtest(result, expected),
    });
  }
};

const arrtest = (result, expected) => {
  for (let i = 0; i < expected.length; i++) {
    if (result[i] != expected[i]) return false;
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
