const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('b664dbcdd3fa75a26d9171bd95a8ec7585ca27f6eb1db23245b19ec58e266dbb');
const myWalletAddress = myKey.getPublic('hex');

let duckCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
duckCoin.addTransaction(tx1);


console.log('/n starting the miner...');
duckCoin.minePendingTransaction(myWalletAddress);

console.log('/nBlaance of xavier is', duckCoin.getBalanceOfAdress(myWalletAddress));

duckCoin.chain[1].transactions[0].amount = 1;

console.log('is chain valid?', duckCoin.isChainValid());

//adds blocks and mines blocks
// console.log('Mining block 1...');
// duckCoin.addBlock(new Block(1, "04/04/2022", {amount: 4}));
// console.log('Mining block2...');
// duckCoin.addBlock(new Block(2, "04/04/2022", {amount: 40}));

//Checks to see if blockchain is valid then tempers with block and checks again if blockchain is valid
// console.log(duckCoin.isChainValid());
// duckCoin.chain[1].data = {amount: 100};
// console.log(duckCoin.isChainValid());

//Logs your blockchain and its blocks
//console.log(JSON.stringify(duckCoin, null, 4));
