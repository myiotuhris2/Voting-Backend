const HDWalletProvider = require('@truffle/hdwallet-provider');
const {Web3} = require('web3');
const compiledFactory = require("./build/Election.json");
 


const provider=new HDWalletProvider(
    'frog buddy wrestle payment right volume easy atom doctor speed amateur glide',
  
    'https://sepolia.infura.io/v3/1e67eaefd6a945129d84221b8a01436f'
);
const web3 = new Web3(provider);

const deploy = async() => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from ', accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
  .deploy({ data: compiledFactory.evm.bytecode.object })
  .send({ gas: "30000000", from: accounts[0] });

  console.log('Contract deployed to ', result.options.address);
  
  provider.engine.stop();
};
deploy();

