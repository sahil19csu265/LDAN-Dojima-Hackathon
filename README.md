# Dojima-Network-hackathon
## Project : LDAN - Land Deeds as NFTs
## Team : Code Click

##### live URL : https://LDAN-Dojima-Hackathon.sahilpal2.repl.co
## Auth Details
#### User -
   Id: rohit@gmail.com     password:rohit@123
#### Admin -
   Id: sahil@gmail.com     password:sahil@123
##### Idea Pitch Video URL : https://drive.google.com/file/d/1HFm3NCua7pX09tP8WtYjLyK0a8qhQ8yq/view
##### Demo Video URL : https://drive.google.com/file/d/1Ewh69vfbixIWEsVwCmI3l_rJrQ1ZEKkX/view?usp=sharing

### Project Description
##### • The project aims to provide a decentralised database with transparent actions happening in land registration.
##### • Both government and public are benefited as it willprevent forging in land records.

### Existing Problem
##### • Land records are stored on a central database which makes it highly insecure and open to manipulations.
##### • Govt is not able to track the illegal capturing of land by private bodies.

### Features
##### • Implement all the transactions on to the blockchain.
##### • Creating a personal digital wallet for people to store theirdigital land.
##### • Create a will functionality that allow users to auto create will as per the owner’s preference.
##### • Implementing proof of owner certificate for their land asset.

### Teachnology used
##### • ERC721 tokens for storing land records
##### • Solidity for writing smart contract
##### • Nodejs for backend
##### • VanillaJs for frontend
##### • MongoDB for storing auth details
##### • Migrated on Dojima network (https://doj-bex-test.dojima.network/address/0x5a52E33F5Fd4B0cCbbB70C32963f4ff9372Ee8D4)

#### How to Setup genesis / Getting started

Setup genesis whenever contracts get changed

### 1. Install dependencies and submodules
```bash
$ npm install

```

### 2. Compile contracts
```bash
#installation of npm v12.0.0 is required
$ npm run truffle:compile
```

### 3. Run Test Blockchain
```bash
$ npm run testrpc
$ npm test
```

### 4. Migrate Contracts to local chain
```bash
$ npm run truffle:migrate
```

### 5. Migrate Contracts to dojima chain
```bash
$ truffle migrate --network dojimachain
```
