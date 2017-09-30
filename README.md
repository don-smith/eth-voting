# Ethereum Voting

This was inspired by the voting tutorial from Mahesh Murthy you can find [here](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2).

I've refactored it into files and split up the operations. My hope is this will provide a bit of tooling I can use in my journey to learn Solidity.


## Building, deploying and running the Voting contract

After cloning this repo and navigating to its folder in your terminal:

1. `npm run testrpc` will start the development blockchain
2. `./build Voting` will compile the `Voting.sol` contract
3. `./deploy Voting` will deploy the Voting contract to the development blockchain
4. `./vote Rama 1` will vote for Rama using the first account in the blockchain
5. `./showvotes` will show the current votes for each candidate


## Starting over

1. Restart testrpc (CTRL-c and `npm run testrpc`)
2. `./clean` will remove all of the files created from building and deploying.
3. Follow the steps above to build, deploy and run the contracts


## Next?

* Make it so each account can only vote once.
* Write a function that shows the results for all candidates.
* Create a different contract and then build, deploy and use it.

