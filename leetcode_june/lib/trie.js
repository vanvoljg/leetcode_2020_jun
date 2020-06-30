'use strict';

export class Trie {
  constructor() {
    this.children = new Array(26);
    this.terminal = false;
  }

  static a = 'a'.charCodeAt(0);

  insert(word) {
    let node = this;
    let char = '';
    let key = 0;
    for (char of word) {
      key = char.charCodeAt(0) - Trie.a;
      if (!node.children[key]) {
        node.children[key] = new Trie();
      }
      node = node.children[key];
    }
    node.terminal = true;
  }

  search(word) {
    let node = this;
    let char = '';
    let key = 0;
    for (char of word) {
      key = char.charCodeAt(0) - Trie.a;
      if (!node.children[key]) return false;
      node = node.children[key];
    }
    return node.terminal;
  }

  startsWith(word) {
    let node = this;
    let char = '';
    let key = 0;
    for (char of word) {
      key = char.charCodeAt(0) - Trie.a;
      if (!node.children[key]) return false;
      node = node.children[key];
    }
    return true;
  }
}
