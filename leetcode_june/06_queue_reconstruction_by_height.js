/**
 * @param {number[][]} people
 * @return {number[][]}
 */

const reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  let reconstructed = [];
  people.forEach((ele) => {
    reconstructed.splice(ele[1], 0, ele);
  });
  return reconstructed;
};

/*
const reconstructQueue = function (people) {
  const shortest = findShortest(people);
  const startIdx = 0;
  const endIdx = people.length - 1;
  queueSort(people, startIdx, endIdx, shortest);
};

function findShortest(people) {
  const shortest = people.reduce(
    (acc, person, i) => {
      if (person[0] < acc.person[0]) {
        acc.person = person;
        acc.index = i;
      } else if (person[0] == acc.person[0] && person[1] > acc.person[1]) {
        acc.person = person;
        acc.index = i;
      }
      return acc;
    },
    { person: [Number.MAX_SAFE_INTEGER, 0], index: 0 }
  );

  return shortest;
}

function queueSort(queue, left, right, shortest) {
  if (queue.length == 0) return [];
  if (queue.length == 1) return [queue[left]];

  // At this point, queue is guaranteed to have 2+ elements, safe to split
  const mid = (left + right) >> 1;
  const leftSorted = queueMergeSortSplit(queue, left, mid - 1);
  const rightSorted = queueMergeSortSplit(queue, mid, right);

  const outputSorted = queueMergeSortMerge(leftSorted, rightSorted);

  return outputSorted;
}

function queueMergeSortMerge(leftQueue, rightQueue) {
  let leftIdx = 0;
  let rightIdx = 0;

  let output = [];

  while (leftIdx < leftQueue.length || rightIdx < rightQueue.length) {
    if (leftQueue[leftIdx][0] <= rightQueue[rightIdx][0]) {
      output.push(leftQueue[leftIdx]);
      leftIdx++;
    } else {
      output.push(rightQueue[rightIdx]);
      rightIdx++;
    }
  }
}
*/

/* When sorting:
 *   Sort by priority and height simultaneously?
 *     [7, 0] <-> [4, 4] : [3, -4] (difference a - b) -> a < b
 *     [7, 1] <-> [7, 0] : [0, 1] -> b < a
 *     [7, 1] <-> [5, 0] : [2, 1] -> b < a        THIS SECTION IS A BIG "NO"
 *     [5, 2] <-> [6, 1] : [-1, 1] -> a < b
 *     [5, 0] <-> [4, 4] : [1, -1] -> a < b
 *     [6, 1] <-> [5, 2] : [1, -1] -> b < a
 *
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

function run() {
  const input1 = [
    [7, 0], // 7 * 0 = 0; 7 + 0 = 7
    [4, 4], // 4 * 4 = 16; 4 + 4 = 8
    [7, 1], // 7 * 1 = 7; 7 + 1 = 8
    [5, 0], // 5 * 0 = 0; 5 + 0 = 5
    [6, 1], // 6 * 1 = 6; 6 + 1 = 7
    [5, 2], // 5 * 2 = 10; 5 + 2 = 7
  ];

  const input2 = [
    [7, 3],
    [8, 7],
    [6, 4],
    [4, 3],
    [3, 1],
    [9, 8],
  ];

  const output1 = [
    [5, 0],
    [7, 0],
    [5, 2],
    [6, 1],
    [4, 4],
    [7, 1],
  ];

  console.log(reconstructQueue(input1));
  console.log(reconstructQueue(input2));
}

/**
 * HERE IT IS! (hopefully)
 * [5, 0], [5, 2] <-> [7, 0], [4, 4] -> [5, 0], [7, 0], [5, 2], [4, 4]
 * if height is less or equal, lower priority number first -- but this doesn't work
 * like when comparing [7,1] and [4,4], 4 is less than 7, but goes after 7
 * So...take the shortest person: they are 4 tall and have 4 people in front of them
 * who are taller or equal in height. Anyone equal in height will need to have a
 * lower priority number in front of them.
 * Yyyyeah, nope...
 */

run();
