const{Blockchain, Transaction, transaction1} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC ('secp256k1');

const mykey = ec.keyFromPrivate('1f6329b602b67155a6256f823766d0f96c03eec1ca42fa17ee54d0c918b517eb');
const myWalletAddress = mykey.getPublic('hex');

let xAmpcoin = new Blockchain();

const tx1 = new transaction1(myWalletAddress, 'public key goes here',10);
tx1.signTransaction(mykey);
xAmpcoin.addTransaction(tx1);

/*xAmpcoin.createTransaction(new transaction1('address1','address2',100));
xAmpcoin.createTransaction(new transaction1('address2','address3',50));*/

console.log('\n Starting the miner.....');
xAmpcoin.minePendingtransactions(myWalletAddress);

console.log('\nBalance of xAmpcoin is',xAmpcoin.getBalanceOfAddress(myWalletAddress));

xAmpcoin.chain[1].transactions[0].amount = 1;
console.log('Is chain Valid?', xAmpcoin.isChainvalid());








/*console.log('\n Starting the miner again.....');
xAmpcoin.minePendingtransactions('raj-address');

console.log('\nBalance of raj is',xAmpcoin.getBalanceOfAddress('raj-address'));
*/  


/*
console.log(" mining block 1..");

xAmpcoin.addBlock(new Block(1, "15/03/2022", { amount: 4 }));

console.log(" mining block 2..");

xAmpcoin.addBlock(new Block(2, "17/03/2022", { amount: 10}));

console.log(" mining block 3..");

xAmpcoin.addBlock(new Block(3, "17/03/2022", { amount: 100}));
*/
//console.log(JSON.stringify(xAmpcoin,  null, 50));