// Imports
import * as fs from 'fs';
import Dotenv from 'dotenv';
import {Network} from '@d11k-ts/client';
import {DojimaClient} from '@d11k-ts/dojima';

Dotenv.config();
const { abi } = JSON.parse(fs.readFileSync("build/contracts/LandNFT.json"));

//Connect wallet, validate address and check balance 
  let phrase = process.env.MNEMONIC;
  // Mainnet
  // const dojClient = new DojimaClient({
  //   phrase
  // })
  // testnet
  const dojClient = new DojimaClient({ 
     phrase, 
     network: Network.Testnet,
     rpcUrl: 'https://api-test.d11k.dojima.network:8545/',
  })

  const signer = dojClient.web3.eth.accounts.privateKeyToAccount(
    `${process.env.PRIVATE_KEY}`
  );
  
  const contract = new dojClient.web3.eth.Contract(
    abi,
    // Replace this with the address of your deployed contract
    `${process.env.CONTRACT_ADDRESS}`
  );

  let address = dojClient.getAddress()
  try {
    const balance = await dojClient.getBalance(address)
    console.log(`Contract Initialised Successfully\nAddress: ${address} with balance ${balance}`)
  } catch (error) {
    console.log(`Caught: ${error} `)
  }

  dojClient.web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY);

  export {signer,contract};

