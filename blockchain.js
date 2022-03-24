const sha256 = require('crypto-js/sha256');
const SHA256 = require('crypto-js/sha256');

const EC = require('elliptic').ec;
const ec = new EC ('secp256k1');

class transaction1{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }

    calculateHash(){
        return sha256(this.fromAddress + this.toAddress + this.amount).toString();
    }

    signTransaction(signingKey){
        if(signingKey.getPublic('hex') !== this.fromAddress){
            throw new Error ('You cannot sign transactions for other wallets!');
        }
        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');
        this.signature = sig.toDER('hex');
    }
    isValid(){
        if(this.fromAddress === null) return true;

        if(!this.signature || this.signature === 0 ){
            throw new Error('No signature in this transaction');
        }
        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}
class Block{
    constructor(timestamp, transactions, previousHash=' '){
        this.timestamp = timestamp;
        this.transactions = transactions;
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
    hasValidTransactions(){
        for(const tx of this.transactions){
            if(!tx.isValid()){
                return false;
            }
        }
        return true;
    }
}
class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
        this.pendingTransactions = [];
        this.miningReward = 10;
    }
    createGenesisBlock(){
        return new Block("15/03/2022", "Genesis block", "0");
    }
    getLastestBlock(){
        return this.chain[this.chain.length - 1];
    }
    minePendingtransactions(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);

        console.log('Block successfully mined!');
        this.chain.push(block);

        this.pendingTransactions=[
            new transaction1(null, miningRewardAddress, this.miningReward)
        ];
    }
    addTransaction(transaction){

        if(!transaction.fromAddress || !transaction.toAddress){
            throw new Error ('Transaction must include from or to address');
        }
        if(!transaction.isValid()){
            throw new Error('cannot add invalid transaction to chain');
        }

        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address){
        let balance =100;
        for(const block of this.chain){
            for( const trans of block.transactions){
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }
                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }
    isChainvalid(){
        for (let i=1; i<this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previuosBlock = this.chain[i - 1];

            if(!currentBlock.hasValidTransactions()){
                return false;
            }
            if (currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if (currentBlock.previousHash !== previuosBlock.hash){
                return false;
            }
        }
        return true;
    }
}

module.exports.Blockchain = Blockchain;
module.exports.transaction1 = transaction1;