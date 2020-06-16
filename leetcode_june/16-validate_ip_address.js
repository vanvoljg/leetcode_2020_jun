'use strict';
/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = (IP) => {
};

const testRunner = (testArr) => {
  for (const [str, result] of testArr) {
    console.log({ str, result, pass: validIPAddress(str) === result });
  }
};

const run = () => {
  let strings = [
    ['172.16.254.1', 'IPv4'],
    ['2001:0db8:85a3:0:0:8A2E:0370:7334', 'IPv6'],
    ['256.256.256.256', 'Neither'],
    ['02001:0db8:85a3:0000:0000:8a2e:0370:7334', 'Neither'],
  ];

  testRunner(strings);
};

run();
