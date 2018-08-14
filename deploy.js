const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'cute moral pluck ring truly eternal dice reduce lizard galaxy consider brother',
    'https://rinkeby.infura.io/eb1a83450c1d403292a48b4b1e65a8f1'
);

const web3 = new Web3(provider);

const deploy = async () =>
{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account: ',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x'+bytecode, arguments: ['Hi there!']})
        .send({ from: accounts[0]});

    console.log('Contract deployed to: ', result.options.address);
};

deploy();