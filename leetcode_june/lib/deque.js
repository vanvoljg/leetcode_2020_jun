'use strict'

export class Deque {
  constructor(val) {
    this.queue = [];
    if (val !== undefined) this.queue.push(val);
  }

  // Get front value
  peek() {
    return this.queue[0];
  }

  // Get back value
  peekTail() {
    return this.queue[this.queue.length - 1];
  }

  // Add to end
  push(val) {
    this.queue.push(val);
    return this.queue.length;
  }

  // Remove from end
  pop() {
    return this.queue.pop();
  }

  // Add to front
  unshift(val) {
    this.queue.unshift(val);
    return this.queue.length;
  }

  // Remove from front
  shift() {
    return this.queue.shift();
  }
}
