'use strict';

export class Trie {
  constructor() {
    this.children = {};
    this.terminal = false;
  }

  insert(word) {
    let node = this;
    let char = '';
    for (char of word) {
      if (!node.children[char]) {
        node.children[char] = new Trie();
      }
      node = node.children[char];
    }
    node.terminal = true;
  }

  search(word) {
    let node = this;
    let char = '';
    for (char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.terminal;
  }

  startsWith(word) {
    let node = this;
    let char = '';
    for (char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
}
