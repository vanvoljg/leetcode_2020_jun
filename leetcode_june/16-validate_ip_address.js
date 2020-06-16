'use strict';
/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = (IP) => {
  const reply = {
    ipv4: 'IPv4',
    ipv6: 'IPv6',
    neither: 'Neither',
  };
  Object.freeze(reply);

  let groups = splitIP(IP);
  switch (groups.length) {
    case 4:
      return validateIPv4(groups) ? reply.ipv4 : reply.neither;
    case 8:
      return validateIPv6(groups) ? reply.ipv6 : reply.neither;
    default:
      return reply.neither;
  }
};

const validateIPv4 = (groups) => {
  const digits = '1234567890';
  for (const group of groups) {
    if (group.length == 0 || group.length > 3) return false;
    if (group.length > 1 && group[0] == '0') return false;
    for (const char of group) {
      if (!digits.includes(char)) return false;
    }
    const num = Number(group);
    if (isNaN(num) || num > 255 || num < 0) return false;
  }
  return true;
};

const validateIPv6 = (groups) => {
  const hex = '1234567890abcdef';
  for (const group of groups) {
    if (group.length == 0 || group.length > 4) return false;
    for (const char of group.toLowerCase()) {
      if (!hex.includes(char)) return false;
    }
  }
  return true;
};

const splitIP = (IP) => {
  let groups = IP.split('.');
  if (groups.length == 4) {
    return groups;
  }
  groups = IP.split(':');
  if (groups.length == 8) {
    return groups;
  }
  return [];
};

const testRunner = (testArr) => {
  for (const [str, result] of testArr) {
    console.log({ str, result, pass: validIPAddress(str) === result });
  }
};

const run = () => {
  let strings = [
    ['172.16.254.1', 'IPv4'],
    ['192.168.0.1', 'IPv4'],
    ['2001:0db8:85a3:0:0:8A2E:0370:7334', 'IPv6'],
    ['256.256.256.256', 'Neither'],
    ['02001:0db8:85a3:0000:0000:8a2e:0370:7334', 'Neither'],
    ['0:0:0:0:0:0:0:0', 'IPv6'],
    ['2607:f0d0:1002:0051:0000:0000:0000:0004', 'IPv6'],
    ['1e1.4.5.6', 'Neither'],
    ['1.0.1.', 'Neither'],
    ['01.01.01.01', 'Neither'],
    ['2001:0db8:85a3:0:0:8A2E:0370:7334', 'IPv6'],
  ];

  testRunner(strings);
};

run();
