import Web3 from 'web3';
import MyContract from './contracts/MyContract.json';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
const contract = new web3.eth.Contract(MyContract.abi, MyContract.address);

async function callContractMethod() {
  const accounts = await web3.eth.getAccounts();
  const result = await contract.methods.myMethod().send({ from: accounts[0] });
  return result;
}
