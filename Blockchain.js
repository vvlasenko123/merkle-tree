/**
 * Seminar 2.1 Blockchain primitive
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Block {
    constructor(data){
        this.data = data;      // Here we simplify data, let it be just a simple string
        this.previousHash = null;
    }

    toHash(){
        const hashBytes = utf8ToBytes(this.data + this.previousHash);
        return SHA256(hashBytes);        // a hash as byte array
    }
}

function areEqualBytes(a, b) {
    if (!a || !b) {
        return false;
    }

    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}

class Blockchain {
    constructor() {
        
        this.chain = [
                new Block('genesis')
            ];
    }

    addBlock(block){
        const previousBlock = this.chain[this.chain.length - 1];
        block.previousHash = previousBlock.toHash();
        this.chain.push(block);
    }

    isValid(){
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            const expectedPreviousHash = previousBlock.toHash();

            if (!areEqualBytes(currentBlock.previousHash, expectedPreviousHash)) {
                return false;
            }
        }

        return true;
    }
}

module.exports = { Block, Blockchain };
