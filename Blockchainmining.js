const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash=' '){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce =0;
    }
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)+ this.nonce).toString();
    }
    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !==Array(difficulty + 1).join("0")){
            this.hash=this.calculateHash();
            this.nonce++;
        }
        console.log("Block Mined :" + this.hash);
    }
}
class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }
    createGenesisBlock(){
        return new Block(0, "15/03/2022", "Genesis block", "0");
    }
    getLastestBlock(){
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLastestBlock().hash;
        newBlock.mineBlock(this.difficulty); 
        this.chain.push(newBlock);
    }
}

let xAmpcoin = new Blockchain();

console.log(" mining block 1..");

xAmpcoin.addBlock(new Block(1, "15/03/2022", { amount: 4 }));

console.log(" mining block 2..");

xAmpcoin.addBlock(new Block(2, "17/03/2022", { amount: 10}));

console.log(" mining block 3..");

xAmpcoin.addBlock(new Block(3, "17/03/2022", { amount: 100}));

//console.log(JSON.stringify(xAmpcoin,  null, 50));


