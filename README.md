# Ethereum Voting

This was inspired by the voting tutorial from Mahesh Murthy you can find [here](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2).

I've refactored it into files and split up the operations. My hope is this will provide a bit of tooling I can use in my journey to learn Solidity.


## Building, deploying and running the Voting contract

After cloning this repo and navigating to its folder in your terminal:

* `npm run testrpc` will start the development blockchain
* `./build Voting` will compile the `Voting.sol` contract
* `./deploy Voting` will deploy the Voting contract to the blockchain
* `./vote Rama 1` will vote for Rama using the first account in the blockchain
* `./showvotes` will show the current votes for each candidate


## Starting over

* Restart testrpc (CTRL-c and `npm run testrpc`)
* `./clean` will remove all of the files created from building and deploying.
* Follow the steps above to build, deploy and run the contracts


## Next?

* Make it so each account can only vote once.
* Write a function that shows the results for all candidates.
* Create a different contract and then build, deploy and use it.

