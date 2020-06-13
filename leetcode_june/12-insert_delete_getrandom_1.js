/**
 * Initialize your data structure here.
 */
/**
 * Initialize your data structure here.
 */
const RandomizedSet = function () {
  // ALWAYS use a power of two for capacity to make hashing quicker
  this.capacity = 64;
  this.size = 0;
  this.storage = new Array(this.capacity);
  for (let i = 0; i < this.capacity; i++) {
    this.storage[i] = [];
  }
  return this;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const idx = getIdx(val, this.capacity);
  if (this.storage[idx].includes(val)) return false;
  this.storage[idx].push(val) && this.size++;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const idx = getIdx(val, this.capacity);
  if (!this.storage[idx].includes(val)) return false;
  innerIdx = this.storage[idx].indexOf(val);
  this.storage[idx].splice(innerIdx, 1)[0] && this.size--;
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const used = [];
  this.storage.forEach((list) => list.forEach((e) => used.push(e)));
  const randIdx = Math.floor(Math.random() * used.length);
  return used[randIdx];
};

/**
 * Index finder
 */
getIdx = (val, cap) => {
  const ret =
    cap % 2 == 0
      ? hashNum(String(val)) & (cap - 1)
      : hashNum(String(val)) % cap;
  return hashNum(String(val)) & (cap - 1);
};

/**
 * Hash function
 */
hashNum = (number) => {
  const lp = 211 * 233;
  return Math.abs((number * lp) ^ lp);
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const run = () => {
  let obj = new RandomizedSet();
  console.log({
    insert_0_0: obj.insert(0),
    insert_1_0: obj.insert(1),
    rand_0: obj.getRandom(),
    rand_1: obj.getRandom(),
    remove_3_0: obj.remove(3),
    remove_1_0: obj.remove(1),
    remove_1_1: obj.remove(1),
    insert_0_1: obj.insert(0),
  });
};

run();
