#!/usr/bin/env node

const fs = require('fs')

const Web3 = require('web3')
const solc = require('solc')

const serverUrl = 'http://localhost:8545'
const provider = new Web3.providers.HttpProvider(serverUrl)
const web3 = new Web3(provider)

console.log('Accounts:\n', web3.eth.accounts)

const codeObj = fs.readFileSync('voting.sol').toString()
const compiledCodeObj = solc.compile(codeObj)
const compiledCode = JSON.stringify(compiledCodeObj, null, 2)

fs.writeFileSync('voting.compiled', compiledCode)
// console.log('Compiled:\n', compiledCode)
console.log('done')
