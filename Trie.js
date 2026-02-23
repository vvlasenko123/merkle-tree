/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let current = this.root;

        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode(char);
            }

            current = current.children[char];
        }

        current.isWord = true;
    }

    hasNode(word){
        let current = this.root;

        for (const char of word) {
            if (!current.children[char]) {
                return false;
            }

            current = current.children[char];
        }

        return current.isWord;
    }

    getAllNodes(){
        const result = [];

        const traverse = (node, currentWord) => {
            if (node.isWord) {
                result.push(currentWord);
            }

            for (const key of Object.keys(node.children)) {
                traverse(node.children[key], currentWord + key);
            }
        };

        traverse(this.root, '');

        return result;
    }
}

module.exports = { Trie };
