/**
 * Seminar 2.3 Binary search tree
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node){
        if (this.root === null) {
            this.root = node;
            return;
        }

        let current = this.root;

        while (true) {
            if (node.data < current.data) {
                if (current.left === null) {
                    current.left = node;
                    return;
                }

                current = current.left;
            }
            else if (node.data > current.data) {
                if (current.right === null) {
                    current.right = node;
                    return;
                }

                current = current.right;
            }
            else {
                return;
            }
        }
    }

    hasNode(data){
        let current = this.root;

        while (current !== null) {
            if (data === current.data) {
                return true;
            }

            if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }

        return false;
    }
}



module.exports = { Node, Tree }
