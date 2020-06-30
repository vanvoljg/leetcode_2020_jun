'use strict';

export class Trie {
  constructor() {
    this.children = new Array(26);
    this.letter = null;
    this.terminal = true;
  }

  static a = 'a'.charCodeAt(0);

  insert(word) {
    let node = this;
    for (let char of word) {
      const key = char.charCodeAt(0) - Trie.a;
      if (!node.children[key]) {
        node.terminal = false;
        node.children[key] = new Trie();
        node.children[key].letter = char;
      }
      node = node.children[key]
    }
  }

  search(word) {
    let node = this;
    let char = '';
    let key = 0;
    for (char of word) {
      key = char.charCodeAt(0) - Trie.a;
      if (node.children[key]) {
        node = node.children[key];
      } else {
        return false;
      }
    }
    return node.terminal;
  }

  startsWith(word) {
    let node = this;
    let char = '';
    for (char of word) {
      const key = char.charCodeAt(0) - Trie.a;
      if (node.children[key]) {
        node = node.children[key];
      } else {
        return false;
      }
    }
    return true;
  }
};
