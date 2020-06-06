/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {};

/* When sorting:
 *   Sort by priority and height simultaneously?
 *     [7, 0] <-> [4, 4] : [3, -4] (difference a - b) -> a < b
 *     [7, 1] <-> [7, 0] : [0, 1] -> b < a
 *     [7, 1] <-> [5, 0] : [2, 1] -> b < a
 *     [5, 2] <-> [6, 1] : [-1, 1] -> a < b
 *     [5, 0] <-> [4, 4] : [1, -1] -> a < b
 *     [6, 1] <-> [5, 2] : [1, -1] -> b < a
 * - equal heights means sort by priority, lower first.
 * - higher heights go earlier only when priority is lower
 * - equal priority means lower hight first
 * - sort by priority, then height: lower priority, then lower height
 *
 * None of that up there seems to work...
 * [4, 4] and [7, 0] -> 4 is shorter AND 7 has higher priority b < a
 * [4, 4] and [5, 2] -> 4 is shorter AND 5 has higher priority b < a
 * [4, 4] and [7, 1] -> 4 is shorter AND 7 has higher priority a < b
 */

const input1 = [
  [7, 0], // 7 * 0 = 0; 7 + 0 = 7
  [4, 4], // 4 * 4 = 16; 4 + 4 = 8
  [7, 1], // 7 * 1 = 7; 7 + 1 = 8
  [5, 0], // 5 * 0 = 0; 5 + 0 = 5
  [6, 1], // 6 * 1 = 6; 6 + 1 = 7
  [5, 2], // 5 * 2 = 10; 5 + 2 = 7
];

// HERE IT IS! (hopefully)
// [5, 0], [5, 2] <-> [7, 0], [4, 4]
// if height is less or equal, higher priority first

const output1 = [
  [5, 0],
  [7, 0],
  [5, 2],
  [6, 1],
  [4, 4],
  [7, 1],
];

